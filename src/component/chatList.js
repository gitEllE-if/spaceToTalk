import { MuiThemeProvider } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { MUI_THEME } from '../muiTheme';
import ChatItem from './chatItem';
import ChatAddDialog from './chatAddDialog';

export default function ChatList({ chats, selectedId, onAddChat }) {
    const [selectedIndex, setSelectedIndex] = useState(selectedId);

    const handleListItemClick = useCallback((event, index) => {
        setSelectedIndex(index);
    }, []);

    const renderChat = useCallback((chat, idx) => {
        return (
            <Link to={`/chats/${chat.id}`}>
                <ChatItem
                    chat={chat} idx={idx} selected={selectedIndex === idx}
                    onClick={handleListItemClick}
                    icon={<ChatRoundedIcon />}
                />
            </Link>
        );
    }, [selectedIndex, handleListItemClick]);

    return (
        <div className='chat__list'>
            <span className="chatlist__title">
                CHATS
            </span>
            <MuiThemeProvider theme={MUI_THEME}>
                <List component="nav" aria-label="main mailbox folders">
                    {chats.map(renderChat)}
                </List>
                <Divider />
                <ChatAddDialog onAddChat={onAddChat} />
            </MuiThemeProvider>
        </div>
    );
}