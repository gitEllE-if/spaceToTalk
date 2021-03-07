export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const ADD_MESSAGES_ARR = 'MESSAGES::ADD_MESSAGES_ARR';
export const DEL_MESSAGE = 'MESSAGES::DEL_MESSAGE';

export const addMessagesArr = (newMessageArr) => ({
    type: ADD_MESSAGES_ARR,
    payload: newMessageArr
});

export const addMessage = (chatId, newMessage) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId: chatId,
        message: newMessage
    }
});

export const delMessage = (chatId, messId) => ({
    type: DEL_MESSAGE,
    payload: {
        chatId: chatId,
        messId: messId
    }
});