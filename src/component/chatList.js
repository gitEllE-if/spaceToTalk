import { MuiThemeProvider } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MUI_THEME } from '../muiTheme';
import ChatItem from './chatItem';
import ChatAddDialog from './chatAddDialog';
import { addChat } from "../store/chats/actions";

export default function ChatList({ selectedId }) {
    const chats = useSelector(store => store.chats);
    const dispatch = useDispatch();

    const handleAddChat = useCallback((chatName, chatType) => {
        dispatch(addChat({ id: `id${chats.chatArr.length + 1}`, name: chatName, type: chatType, messages: [] }));
    }, [dispatch, chats]);

    const renderChat = useCallback((chat, idx) => {
        return (
            <Link to={`/chats/${chat.id}`}>
                <ChatItem
                    chat={chat} idx={idx} selected={selectedId === idx}
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
                    {chats.chatArr.map(renderChat)}
                </List>
                <Divider />
                <ChatAddDialog onAddChat={handleAddChat} />
            </MuiThemeProvider>
        </div>
    );
}