import { useCallback } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Divider from '@material-ui/core/Divider';
import { addChat } from "../store/chats/actions";
import ChatAddDialog from "./chatAddDialog";

export default function ChatSelect() {
    const chats = useSelector(store => store.chats.chatArr);
    const dispatch = useDispatch();

    const handleAddChat = useCallback((chatName, chatType) => {
        dispatch(addChat({ name: chatName, type: chatType }));
    }, [dispatch]);

    const renderChat = useCallback((chat, idx) => {
        return (
            <li key={idx}>
                <Link to={`/chats/${chat.id}`}>
                    {chat.name}
                </Link>
            </li>
        );
    }, [chats]);

    return (
        <>
            <div className="app__text">Please select Chat or create New</div>
            <div className="chat__select">
                <ul>{chats.map(renderChat)}</ul>
                <Divider />
                <ChatAddDialog onAddChat={handleAddChat} />
            </div>
        </>
    );
}