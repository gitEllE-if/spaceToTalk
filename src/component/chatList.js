import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ChatItem from './chatItem';
import ChatAddDialog from './chatAddDialog';
import { addChat } from "../store/chats/actions";
import { STATUS } from '../const';

export default function ChatList({ chatId }) {
    const chats = useSelector(store => store.chats.chatArr);
    const chatsRequest = useSelector(store => store.chats.request);
    const chatsError = useSelector(store => store.chats.error);
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

    const getComponent = useCallback(() => {
        switch (chatsRequest) {
            case STATUS.SUCCESS:
                return <List dense='true'>{chats.map(renderChat)}</List>
            case STATUS.REQUEST:
                return <CircularProgress />;
            case STATUS.FAILURE:
                return <div className='error__field'>error<br /><span>{chatsError}</span></div>;
        }
    }, [chatsRequest, chatsError, selectedId, chats]);

    return (
        <div className='chat__list'>
            <span className="chatlist__title">
                CHATS
            </span>
            {getComponent()}
            <Divider />
            <ChatAddDialog onAddChat={handleAddChat} />
        </div>
    );
}