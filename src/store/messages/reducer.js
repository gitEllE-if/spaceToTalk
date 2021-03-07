import { ADD_MESSAGE, ADD_MESSAGES_ARR, DEL_MESSAGE } from './actions'

const initialState = {
    messageArr: {
        'id1': [{ id: 'id1', text: 'Привет', author: 'Эля' }]
    }
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
            let newArr = [...state.messageArr[action.payload.chatId]];
            const idx = newArr.findIndex((mess) => mess.id == action.payload.messId);
            newArr.splice(idx, 1);
            return {
                ...state, messageArr: { ...state.messageArr, [action.payload.chatId]: [...newArr] }
            };
        case ADD_MESSAGES_ARR:
            return {
                ...state, messageArr: { ...state.messageArr, ...action.payload }
            };
        default:
            return state;
    }
}

export default messagesReducer;