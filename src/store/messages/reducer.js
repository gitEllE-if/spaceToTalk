import { ADD_MESSAGE, ADD_MESSAGES_ARR, DEL_MESSAGE, DEL_MESSAGES_ARR } from './actions'

const initialState = {
    messageArr: {
        'id1': [{ id: 'id1', text: 'Привет', author: 'elle' }]
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
        case DEL_MESSAGES_ARR:
            let newList = { ...state.messageArr };
            delete newList[action.payload];
            return {
                ...state, messageArr: { ...newList }
            };
        default:
            return state;
    }
}

export default messagesReducer;