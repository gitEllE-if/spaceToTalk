import { STATUS } from '../../const';
import {
    ADD_MESSAGE, ADD_MESSAGES_ARR, DEL_MESSAGE, DEL_MESSAGES_ARR,
    LOAD_MESSAGES_REQUEST, LOAD_MESSAGES_REQUEST_FAILURE, LOAD_MESSAGES_REQUEST_SUCCESS
} from './actions'

const initialState = {
    messageArr: {},
    request: STATUS.IDLE,
    error: null
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state, messageArr: {
                    ...state.messageArr,
                    [action.payload.chatId]: [...state.messageArr[action.payload.chatId], { ...action.payload.message }]
                }
            };
        case DEL_MESSAGE:
            const newArr = state.messageArr[action.payload.chatId].filter((mess) => mess.id !== action.payload.messId);
            return {
                ...state, messageArr: { ...state.messageArr, [action.payload.chatId]: [...newArr] }
            };
        case ADD_MESSAGES_ARR:
            return {
                ...state, messageArr: { ...state.messageArr, ...action.payload }
            };
        case DEL_MESSAGES_ARR:
            const newList = { ...state.messageArr };
            delete newList[action.payload];
            return {
                ...state, messageArr: { ...newList }
            };
        case LOAD_MESSAGES_REQUEST:
            return { ...state, request: STATUS.REQUEST, error: null };
        case LOAD_MESSAGES_REQUEST_SUCCESS:
            return { ...state, messageArr: action.payload, request: STATUS.SUCCESS, error: null };
        case LOAD_MESSAGES_REQUEST_FAILURE:
            return { ...state, request: STATUS.FAILURE, error: action.payload };
        default:
            return state;
    }
}

export default messagesReducer;