import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { delChat } from '../store/chats/actions';

export default function ChatItem({ chat, selected, icon }) {
    const dispatch = useDispatch();

    const handleClick = useCallback(() => {
        dispatch(delChat(chat.id));
    }, [dispatch, chat]);

    return (
        <ListItem
            button
            selected={selected}
        >
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText
                primary={chat.name}
                secondary={chat.type}
            />
            <ListItemSecondaryAction>
                <IconButton color='primary' edge="end" aria-label="delete" onClick={handleClick}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}