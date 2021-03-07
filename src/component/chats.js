import { useParams } from "react-router-dom";
import ChatList from "./chatList";
import Messages from "./messages";

export default function Chats() {
    const params = useParams();

    // useEffect(() => {
    //     let timerID = null;
    //     const lastAuthor = selectedMessages[selectedMessages.length - 1]?.author;
    //     if (selectedMessages && lastAuthor && lastAuthor !== BOT_NAME) {
    //         timerID = setTimeout(() => {
    //             handleAddMessage(lastAuthor + BOT_TEXT, BOT_NAME);
    //         }, 1000)
    //     }
    //     return () => {
    //         clearTimeout(timerID);
    //     }
    // }, [handleAddMessage, selectedMessages]);

    return (
        <>
            <ChatList chatId={params.chatId} />
            <div className="app__field">
                {params.chatId ?
                    <Messages chatId={params.chatId} /> :
                    <div className="app__text">Please select Chat or create New</div>
                }
            </div>
        </>
    );
}