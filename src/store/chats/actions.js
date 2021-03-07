import { addMessagesArr } from "../messages/actions";

export const ADD_CHAT = 'CHATS::ADD_CHAT';

export const addChatDirect = (newChat) => ({
    type: ADD_CHAT,
    payload: newChat
});

export const addChat = (newChat) => (dispatch, getState) => {
    const chatArr = getState().chats.chatArr;
    let nextChatId = 1;
    if (chatArr.length) {
        nextChatId = +chatArr[chatArr.length - 1]?.id.replace(/\D+/g, "") + 1;  // last chat id to number and +1
    }
    dispatch(addChatDirect({ ...newChat, id: `id${nextChatId}` }));
    dispatch(addMessagesArr({ [`id${nextChatId}`]: [] }));
};