import { addMessagesArr, delMessagesArr } from "../messages/actions";
import { API } from "../../const";

export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DEL_CHAT = 'CHATS::DEL_CHAT';
export const SET_HIGHLIGHT = 'CHATS::SET_HIGHLIGHT';
export const LOAD_CHATS = 'CHATS::LOAD_CHATS';
export const LOAD_CHATS_REQUEST = 'CHATS::LOAD_CHATS_REQUEST';
export const LOAD_CHATS_REQUEST_SUCCESS = 'CHATS::LOAD_CHATS_REQUEST_SUCCESS';
export const LOAD_CHATS_REQUEST_FAILURE = 'CHATS::LOAD_CHATS_REQUEST_FAILURE';


const addChatDirect = (newChat) => ({
    type: ADD_CHAT,
    payload: newChat
});

export const addChat = (newChat) => (dispatch, getState) => {
    const chatArr = getState().chats.chatArr;
    let nextChatId = 1;
    if (chatArr.length) {
        nextChatId = +chatArr[chatArr.length - 1]?.id.replace(/\D+/g, "") + 1;  // last chat id to number and +1
    }
    dispatch(addChatDirect({ ...newChat, id: `id${nextChatId}`, highlighted: false }));
    dispatch(addMessagesArr({ [`id${nextChatId}`]: [] }));
};

const delChatDirect = (chatId) => ({
    type: DEL_CHAT,
    payload: chatId
});

export const delChat = (chatId) => (dispatch, getState) => {
    dispatch(delMessagesArr(chatId));
    dispatch(delChatDirect(chatId));
};

export const setHighlight = (chatId, highlight) => ({
    type: SET_HIGHLIGHT,
    payload: { chatId: chatId, highlighted: highlight }
});

export const loadChatsRequest = () => ({
    type: LOAD_CHATS_REQUEST
});

export const loadChatsRequestSuccess = (data) => ({
    type: LOAD_CHATS_REQUEST_SUCCESS,
    payload: data
});

export const loadChatsRequestFailure = (err) => ({
    type: LOAD_CHATS_REQUEST_FAILURE,
    payload: err
});

export const loadChats = () => async (dispatch) => {
    dispatch(loadChatsRequest);
    let result = null;
    try {
        result = await fetch(`${API}chats.json`);
        const response = await result.json();
        dispatch(loadChatsRequestSuccess(response));
    }
    catch (err) {
        console.log(err);
        dispatch(loadChatsRequestFailure(result.status));
    }
};