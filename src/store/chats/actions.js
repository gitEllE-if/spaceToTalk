export const ADD_CHAT = 'CHATS::ADD_CHAT';

export const addChat = (newChat) => ({
    type: ADD_CHAT,
    payload: newChat
});