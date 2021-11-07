import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ChatList from "./chatList";
import ChatSelect from "./chatSelect";
import Error from "./error";
import Messages from "./messages";

export default function Chats() {
    const params = useParams();
    const chatsError = useSelector(store => store.chats.error);

    return (
        <>
            <ChatList chatId={params.chatId} />
            <main className="app__field">
                {params.chatId ?
                    <Messages chatId={params.chatId} /> :
                    chatsError ?
                        <Error errorCode={chatsError}></Error> :
                        <ChatSelect />
                }
            </main>
        </>
    );
}