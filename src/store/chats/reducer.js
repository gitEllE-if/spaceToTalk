import { ADD_CHAT, DEL_CHAT, SET_HIGHLIGHT } from './actions'

const initialState = {
    chatArr: [
        {
            id: 'id1',
            name: 'My Chat',
            type: 'group chat',
            highlighted: false
        }
    ]
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
        default:
            return state;
    }
}

export default chatsReducer;