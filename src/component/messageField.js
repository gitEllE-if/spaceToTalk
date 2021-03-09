import { useCallback, useEffect, useRef } from "react";
import MessageItem from './messageItem';

export default function MessageField({ chatId, messages }) {
    const messFieldEl = useRef();

    useEffect(() => {
        if (messFieldEl) {
            messFieldEl.current.scrollTop = messFieldEl.current.scrollHeight;
        }
    }, [messages]);

    const renderMessage = useCallback((message) => {
        return (<MessageItem chatId={chatId} message={message} />);
    }, [chatId, messages]);

    return (
        <div ref={messFieldEl} className="message__field">
            {messages.map(renderMessage)}
        </div>
    )
}