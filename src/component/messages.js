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
        let nextMessId = 1;
        if (selectedMessages.length) {
            nextMessId = +selectedMessages[selectedMessages.length - 1]?.id.replace(/\D+/g, "") + 1;  // last id number + 1
        }
        dispatch(addMessage(chatId, { id: `id${nextMessId}`, text: text, author: author }));
    }, [dispatch, chatId, selectedMessages]);

    return (
        <>
            <MessageField chatId={chatId} messages={selectedMessages || []} />
            {selectedMessages && <MessageSend onAddMessage={handleAddMessage} />}
        </>
    )
}