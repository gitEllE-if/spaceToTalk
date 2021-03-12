import { STATUS } from '../../const';
import {
    ADD_CHAT, DEL_CHAT, SET_HIGHLIGHT,
    LOAD_CHATS_REQUEST_FAILURE, LOAD_CHATS_REQUEST, LOAD_CHATS_REQUEST_SUCCESS
} from './actions'

const initialState = {
    chatArr: [{}],
    request: STATUS.IDLE,
    error: null
};

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return { ...state, chatArr: [...state.chatArr, { ...action.payload }] };
        case DEL_CHAT:
            const newArr = state.chatArr.filter((chat) => chat.id !== action.payload);
            return {
                ...state, chatArr: [...newArr]
            };
        case SET_HIGHLIGHT:
            const newChatArr = state.chatArr.map((chat) =>
                chat.id === action.payload.chatId ? { ...chat, highlighted: action.payload.highlighted } : chat
            );
            return { ...state, chatArr: [...newChatArr] };
        case LOAD_CHATS_REQUEST:
            return { ...state, request: STATUS.REQUEST };
        case LOAD_CHATS_REQUEST_SUCCESS:
            return { ...state, chatArr: action.payload, request: STATUS.SUCCESS };
        case LOAD_CHATS_REQUEST_FAILURE:
            return { ...state, error: action.payload, request: STATUS.FAILURE };
        default:
            return state;
    }
}

export default chatsReducer;