import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/messages/actions";
import MessageField from './messageField';
import MessageSend from "./messageSend";

export default function Messages({ chatId }) {
    const messages = useSelector(store => store.messages.messageArr);
    const profile = useSelector(store => store.profile);
    const dispatch = useDispatch();

    const selectedMessages = useMemo(() => messages[chatId], [chatId, messages]);

    const handleAddMessage = useCallback((text, author = profile.name) => {
        dispatch(addMessage(chatId, { text: text, author: author }));
    }, [dispatch, chatId]);

    return (
        <>
            <MessageField chatId={chatId} messages={selectedMessages || []} />
            {selectedMessages && <MessageSend onAddMessage={handleAddMessage} />}
        </>
    )
}