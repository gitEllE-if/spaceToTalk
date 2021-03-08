import { ADD_CHAT, DEL_CHAT } from './actions'

const initialState = {
    chatArr: [
        {
            id: 'id1',
            name: 'My Chat',
            type: 'group chat',
        }
    ]
};

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return { ...state, chatArr: [...state.chatArr, { ...action.payload }] };
        case DEL_CHAT:
            let newArr = [...state.chatArr];
            const idx = newArr.findIndex((chat) => chat.id == action.payload);
            newArr.splice(idx, 1);
            return {
                ...state, chatArr: [...newArr]
            };
        default:
            return state;
    }
}

export default chatsReducer;