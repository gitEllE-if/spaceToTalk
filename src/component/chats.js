import { useParams } from "react-router-dom";
import { useMemo, useCallback, useEffect } from "react";
import ChatList from "./chatList";
import MessageField from "./messageField";
import { BOT_NAME, BOT_TEXT } from '../const';
import MessageSend from "./messageSend";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/chats/actions";

export default function Chats() {
    const params = useParams();
    const profile = useSelector(store => store.profile);
    const chats = useSelector(store => store.chats);
    const dispatch = useDispatch();

    const selectedIndex = useMemo(() => chats.chatArr.findIndex((chat) => chat.id === params.chatId), [params, chats]);
    const selectedChat = useMemo(() => chats.chatArr[selectedIndex], [chats, selectedIndex]);

    const handleAddMessage = useCallback((text, author = profile.name) => {
        dispatch(addMessage(selectedIndex, text, author));
    }, [dispatch, chats, selectedIndex]);

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
            <ChatList selectedId={selectedIndex} />
            <div className="app__field">
                <MessageField messages={selectedChat?.messages || []} />
                {params.chatId && selectedChat && <MessageSend onAddMessage={handleAddMessage} />}
            </div>
        </>
    );
}