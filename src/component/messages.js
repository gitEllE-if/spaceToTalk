import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import { addMessage } from "../store/messages/actions";
import MessageField from './messageField';
import MessageSend from "./messageSend";
import Error from "./error";
import { STATUS } from "../const";

export default function Messages({ chatId }) {
    const messages = useSelector(store => store.messages.messageArr);
    const messagesRequest = useSelector(store => store.messages.request);
    const messagesError = useSelector(store => store.messages.error);
    const profile = useSelector(store => store.profile);
    const dispatch = useDispatch();

    const selectedMessages = useMemo(() => messages[chatId], [chatId, messages]);

    const handleAddMessage = useCallback((text, author = profile.name) => {
        dispatch(addMessage(chatId, { text: text, author: author }));
    }, [dispatch, chatId]);

    const getComponent = useCallback(() => {
        switch (messagesRequest) {
            case STATUS.SUCCESS:
                return (
                    <>
                        <MessageField chatId={chatId} messages={selectedMessages || []} />
                        {selectedMessages && <MessageSend onAddMessage={handleAddMessage} />}
                    </>
                );
            case STATUS.REQUEST:
                return <CircularProgress />;
            case STATUS.FAILURE:
                return <Error errorCode={messagesError} />;
        }
    }, [messagesRequest, messagesError, chatId, selectedMessages]);

    return (
        getComponent()
    );
}