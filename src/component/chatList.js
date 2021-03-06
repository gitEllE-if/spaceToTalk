import { MuiThemeProvider } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { MUI_THEME } from '../muiTheme';
import ChatItem from './chatItem';
import ChatAddDialog from './chatAddDialog';

export default function ChatList({ chats, selectedId, onAddChat }) {

    const renderChat = useCallback((chat, idx) => {
        return (
            <Link to={`/chats/${chat.id}`}>
                <ChatItem
                    chat={chat}
                    selected={selectedId === idx}
                    icon={<ChatRoundedIcon />}
                />
            </Link>
        );
    }, [selectedId]);

    return (
        <div className='chat__list'>
            <span className="chatlist__title">
                CHATS
            </span>
            <MuiThemeProvider theme={MUI_THEME}>
                <List >
                    {chats.map(renderChat)}
                </List>
                <Divider />
                <ChatAddDialog onAddChat={onAddChat} />
            </MuiThemeProvider>
        </div>
    );
}