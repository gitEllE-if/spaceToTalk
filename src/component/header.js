import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

export default function Header() {
    const profile = useSelector(store => store.profile);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = useCallback((event) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    return (
        <header className="header">
            <nav className='header__menu'>
                <IconButton
                    aria-label="menu"
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
            </nav>
            <div className='header__title'>
                <Link to="/">
                    SPACE <span> to talk  </span> <StarRoundedIcon />  {profile.name}
                </Link>
            </div>
        </header>
    );
}