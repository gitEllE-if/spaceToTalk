import { ADD_CHAT, ADD_MESSAGE } from './actions'

const initialState = {
    chatArr: [
        {
            id: 'id1',
            name: 'My Chat',
            type: 'group chat',
            messages: [{ text: 'Привет', author: 'Эля' }]
        }
    ]
};

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return { ...state, chatArr: [...state.chatArr, { ...action.payload }] };
        case ADD_MESSAGE:
            const newState = { ...state };
            const NewChat = { ...[...state.chatArr][action.payload.idx], messages: [...[...state.chatArr][action.payload.idx].messages, action.payload.message] };
            newState.chatArr[action.payload.idx] = NewChat;
            return newState;
        default:
            return state;
    }
}

export default chatsReducer;