import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import { useState, useCallback } from 'react';

export default function ProfileChangeDialog({ onChangeProfile }) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');

    const handleClickOpen = useCallback(() => {
        setOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    const handleChangeName = useCallback((event) => {
        setName(event.target.value);
    }, []);

    const handleChangeAge = useCallback((event) => {
        setAge(event.target.value);
    }, []);

    const handleChangeCity = useCallback((event) => {
        setCity(event.target.value);
    }, []);

    const handleApply = useCallback(() => {
        if (name && name.trim()) {
            onChangeProfile({ name, age, city });
        }
        handleClose();
    }, [onChangeProfile, name, age, city]);

    return (
        <div className="profile__change">
            <Button variant="contained" onClick={handleClickOpen} startIcon={<EditRoundedIcon />}>
                Change
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Profile edit</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To edit Profile, please enter new name, age, city
                    </DialogContentText>
                    <TextField required value={name} onChange={handleChangeName}
                        autoFocus
                        margin="dense"
                        label="name"
                        type="text"
                        fullWidth
                        helperText="Please enter name"
                    />
                    <TextField value={age} onChange={handleChangeAge}
                        margin="dense"
                        label="age"
                        type="number"
                        fullWidth
                        helperText="Please enter age"
                    />
                    <TextField value={city} onChange={handleChangeCity}
                        margin="dense"
                        label="city"
                        type="text"
                        fullWidth
                        helperText="Please enter city"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} >
                        Cancel
                    </Button>
                    <Button onClick={handleApply} >
                        Apply
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}