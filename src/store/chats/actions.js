export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const ADD_MESSAGE = 'CHATS::ADD_MESSAGE';

export const addChat = (newChat) => ({
    type: ADD_CHAT,
    payload: newChat
});

export const addMessage = (idx, newText, newAuthor) => ({
    type: ADD_MESSAGE,
    payload: {
        idx: idx,
        message: { text: newText, author: newAuthor }
    }
});