import { useCallback, useEffect, useRef } from "react";
import MessageItem from './messageItem';

export default function MessageField({ messages }) {
    const messFieldEl = useRef();

    useEffect(() => {
        if (messFieldEl) {
            messFieldEl.current.scrollTop = messFieldEl.current.scrollHeight;
        }
    }, [messages]);

    const renderMessage = useCallback((message) => {
        return (<MessageItem text={message.text} author={message.author} />);
    }, []);

    return (
        <div ref={messFieldEl} className="message__field">
            {messages.map(renderMessage)}
        </div>
    )
}