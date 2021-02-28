import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useCallback } from 'react';

export default function chatItem(props) {

    const handleClick = useCallback((event) => {
        props.onClick(event, props.idx);
    }, [props.idx, props.onClick]);

    return (
        <ListItem
            button
            selected={props.selected}
            onClick={handleClick}
        >
            <ListItemIcon>
                {props.icon}
            </ListItemIcon>
            <ListItemText
                primary={props.chat.name}
                secondary={props.chat.desc}
            />
        </ListItem>
    );
}