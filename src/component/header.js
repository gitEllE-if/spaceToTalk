import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

import { MUI_THEME } from '../muiTheme';

export default function Header() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = useCallback((event) => {
        setAnchorEl(event.currentTarget);
    });

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    });

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
                        <MenuItem onClick={handleClose}><Link to="/">Main</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to="/chats">Chats</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to="/profile">Profile</Link></MenuItem>
                    </Menu>
                </div>
                <div className='header__title'>
                    SPACE <span> to talk  </span> <StarRoundedIcon />
                </div>
            </MuiThemeProvider>
        </div>
    );
}