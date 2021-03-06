import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default function ChatItem({ chat, selected, icon }) {

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
        </ListItem>
    );
}