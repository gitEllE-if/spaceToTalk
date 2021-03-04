import { useParams } from "react-router-dom";
import { useMemo, useCallback, useEffect } from "react";
import ChatList from "./chatList";
import MessageField from "./messageField";
import { BOT_NAME, BOT_TEXT, USER } from '../const';
import MessageSend from "./messageSend";
import { useDispatch, useSelector } from "react-redux";
import { addChat, addMessage } from "../store/chats/actions";

export default function Chats() {
    const params = useParams();
    const chats = useSelector(store => store.chats);
    const dispatch = useDispatch();

    const selectedIndex = useMemo(() => chats.chats.findIndex((chat) => chat.id === params.chatId), [params, chats]);
    // const selectedChat = useMemo(() => chatArr.find((chat) => chat.id === params.chatId), [params, chatArr]);
    const selectedChat = useMemo(() => chats.chats[selectedIndex], [params, chats, selectedIndex]);

    const handleAddMessage = useCallback((text, author = USER.name) => {
        dispatch(addMessage(selectedIndex, text, author));
    }, [dispatch, chats, selectedIndex]);

    const handleAddChat = useCallback((chatName, chatType) => {
        dispatch(addChat({ id: `id${chats.chats.length + 1}`, name: chatName, type: chatType, messages: [] }));
    }, [dispatch, chats]);

    useEffect(() => {
        let timerID = null;
        const lastAuthor = selectedChat?.messages[selectedChat.messages.length - 1]?.author;
        if (lastAuthor && lastAuthor !== BOT_NAME) {
            timerID = setTimeout(() => {
                handleAddMessage(lastAuthor + BOT_TEXT, BOT_NAME);
            }, 1000)
        }
        return () => {
            clearTimeout(timerID);
        }
    }, [selectedChat, handleAddMessage]);

    return (
        <>
            <ChatList chats={chats.chats} selectedId={selectedIndex} onAddChat={handleAddChat} />
            <div className="app__field">
                <MessageField messages={selectedChat?.messages || []} />
                {params.chatId && selectedChat && <MessageSend onAddMessage={handleAddMessage} />}
            </div>
        </>
    );
}