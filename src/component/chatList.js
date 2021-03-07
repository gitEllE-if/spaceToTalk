import { MuiThemeProvider } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MUI_THEME } from '../muiTheme';
import ChatItem from './chatItem';
import ChatAddDialog from './chatAddDialog';
import { addChat } from "../store/chats/actions";
import { addMessagesArr } from '../store/messages/actions';

export default function ChatList({ chatId }) {
    const chats = useSelector(store => store.chats.chatArr);
    const dispatch = useDispatch();

    const selectedId = useMemo(() => chats.findIndex((chat) => chat.id === chatId), [chatId, chats]);

    const handleAddChat = useCallback((chatName, chatType) => {
        let nextId = 1;
        if (chats.length) {
            nextId = +chats[chats.length - 1].id.replace(/\D+/g, "") + 1;  // last id number + 1
        }
        dispatch(addChat({ id: `id${nextId}`, name: chatName, type: chatType }));
        dispatch(addMessagesArr({ [`id${nextId}`]: [] }));
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
                    {chats.map(renderChat)}
                </List>
                <Divider />
                <ChatAddDialog onAddChat={handleAddChat} />
            </MuiThemeProvider>
        </div>
    );
}