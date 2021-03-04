import { CHANGE_NAME, CHANGE_AGE, CHANGE_CITY } from './actions'

const initialState = {
    name: 'Name',
    age: 99,
    city: 'City'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return { ...state, name: action.payload };
        case CHANGE_AGE:
            return { ...state, age: action.payload };
        case CHANGE_CITY:
            return { ...state, age: action.payload };
        default:
            return state;
    }
}

export default profileReducer;