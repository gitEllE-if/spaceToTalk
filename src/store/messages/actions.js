import { BOT_NAME, BOT_TEXT, API } from "../../const";
import { setHighlight } from "../chats/actions";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const ADD_MESSAGES_ARR = 'MESSAGES::ADD_MESSAGES_ARR';
export const DEL_MESSAGE = 'MESSAGES::DEL_MESSAGE';
export const DEL_MESSAGES_ARR = 'MESSAGES::DEL_MESSAGES_ARR';
export const LOAD_MESSAGES = 'MESSAGES::LOAD_MESSAGES';
export const LOAD_MESSAGES_REQUEST = 'MESSAGES::LOAD_MESSAGES_REQUEST';
export const LOAD_MESSAGES_REQUEST_SUCCESS = 'MESSAGES::LOAD_MESSAGES_REQUEST_SUCCESS';
export const LOAD_MESSAGES_REQUEST_FAILURE = 'MESSAGES::LOAD_MESSAGES_REQUEST_FAILURE';

export const addMessagesArr = (newMessageArr) => ({
    type: ADD_MESSAGES_ARR,
    payload: newMessageArr
});

export const delMessagesArr = (chatId) => ({
    type: DEL_MESSAGES_ARR,
    payload: chatId
});

export const delMessage = (chatId, messId) => ({
    type: DEL_MESSAGE,
    payload: {
        chatId: chatId,
        messId: messId
    }
});

const addMessageDirect = (chatId, newMessage) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId: chatId,
        message: newMessage
    }
});

export const addMessage = (chatId, newMessage) => (dispatch, getState) => {
    const messArr = getState().messages.messageArr[chatId];
    let nextMessId = 1;
    if (messArr.length) {
        nextMessId = +messArr[messArr.length - 1]?.id.replace(/\D+/g, "") + 1;  // last message id to number and +1
    }
    dispatch(addMessageDirect(chatId, { ...newMessage, id: `id${nextMessId}` }));

    if (newMessage.author !== BOT_NAME) {
        setTimeout(() => {
            dispatch(addMessage(chatId, { text: newMessage.author + BOT_TEXT, author: BOT_NAME }));
        }, 1000);
    }
    else {
        dispatch(setHighlight(chatId, true));
        setTimeout(() => { dispatch(setHighlight(chatId, false)) }, 1000);
    }
};

export const loadMessagesRequest = () => ({
    type: LOAD_MESSAGES_REQUEST
});

export const loadMessagesRequestSuccess = (data) => ({
    type: LOAD_MESSAGES_REQUEST_SUCCESS,
    payload: data
});

export const loadMessagesRequestFailure = (err) => ({
    type: LOAD_MESSAGES_REQUEST_FAILURE,
    payload: err
});

export const loadMessages = () => async (dispatch) => {
    dispatch(loadMessagesRequest);
    let result = null;
    try {
        result = await fetch(`${API}messages.json`);
        const response = await result.json();
        dispatch(loadMessagesRequestSuccess(response));
    }
    catch (err) {
        console.log(err);
        dispatch(loadMessagesRequestFailure(result.status));
    }
};