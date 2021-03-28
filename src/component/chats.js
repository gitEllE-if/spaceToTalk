import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ChatList from "./chatList";
import Error from "./error";
import Messages from "./messages";

export default function Chats() {
    const params = useParams();
    const chatsError = useSelector(store => store.chats.error);

    return (
        <>
            <ChatList chatId={params.chatId} />
            <div className="app__field">
                {params.chatId ?
                    <Messages chatId={params.chatId} /> :
                    chatsError ?
                        <Error errorCode={chatsError}></Error> :
                        <div className="app__text">Please select Chat or create New</div>
                }
            </div>
        </>
    );
}