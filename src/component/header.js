import { MuiThemeProvider } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import { useCallback, useState } from 'react';
import { MUI_THEME } from '../muiTheme';

export default function Header() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = useCallback((event) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    return (
        <div className="header">
            <MuiThemeProvider theme={MUI_THEME}>
                <div className='header__menu'>
                    <IconButton
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MenuRoundedIcon />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Main</MenuItem>
                        <MenuItem onClick={handleClose}>Chats</MenuItem>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                    </Menu>
                </div>
                <div className='header__title'>
                    SPACE <span> to talk  </span> <StarRoundedIcon />
                </div>
            </MuiThemeProvider>
        </div>
    );
}