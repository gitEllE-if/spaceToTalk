import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ChatItem from './chatItem';
import ChatAddDialog from './chatAddDialog';
import { addChat } from "../store/chats/actions";

export default function ChatList({ chatId }) {
    const chats = useSelector(store => store.chats.chatArr);
    const dispatch = useDispatch();

    const selectedId = useMemo(() => chats.findIndex((chat) => chat.id === chatId), [chatId, chats]);

    const handleAddChat = useCallback((chatName, chatType) => {
        dispatch(addChat({ name: chatName, type: chatType }));
    }, [dispatch]);

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
            <List dense='true'>
                {chats.map(renderChat)}
            </List>
            <Divider />
            <ChatAddDialog onAddChat={handleAddChat} />
        </div>
    );
}