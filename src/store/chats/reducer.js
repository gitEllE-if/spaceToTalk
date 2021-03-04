import { ADD_CHAT, ADD_MESSAGE } from './actions'

const initialState = {
    chats: [
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
            return { ...state, chats: [...state.chats, { ...action.payload }] };
        case ADD_MESSAGE:
            const newState = { ...state };
            const NewChat = { ...[...state.chats][action.payload.idx], messages: [...[...state.chats][action.payload.idx].messages, action.payload.message] };
            newState.chats[action.payload.idx] = NewChat;
            return newState;
        default:
            return state;
    }
}

export default chatsReducer;