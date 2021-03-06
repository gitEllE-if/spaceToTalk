import { useParams } from "react-router-dom";
import { useMemo, useState, useCallback, useEffect } from "react";
import ChatList from "./chatList";
import MessageField from "./messageField";
import { CHAT_ARR, BOT_NAME, BOT_TEXT, USER } from '../const';
import MessageSend from "./messageSend";

export default function Chats() {
    const params = useParams();
    const [chatArr, setChatArr] = useState(CHAT_ARR);

    const selectedIndex = useMemo(() => chatArr.findIndex((chat) => chat.id === params.chatId), [params, chatArr]);
    const selectedChat = useMemo(() => chatArr[selectedIndex], [chatArr, selectedIndex]);

    const handleAddMessage = useCallback((text, author = USER.name) => {
        const updatedChat = { ...selectedChat, messages: [...selectedChat.messages, { text, author }] };
        const newChatArr = [...chatArr];
        newChatArr[selectedIndex] = updatedChat;
        setChatArr(newChatArr);
    }, [chatArr, selectedIndex, selectedChat]);

    const handleAddChat = useCallback((chatName, chatDesc) => {
        setChatArr([...chatArr, { id: `id${chatArr.length + 1}`, name: chatName, desc: chatDesc, messages: [] }])
    }, [chatArr]);

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
            <ChatList chats={chatArr} selectedId={selectedIndex} onAddChat={handleAddChat} />
            <div className="app__field">
                <MessageField messages={selectedChat?.messages || []} />
                {params.chatId && selectedChat && <MessageSend onAddMessage={handleAddMessage} />}
            </div>
        </>
    );
}