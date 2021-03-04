import { combineReducers, createStore } from 'redux';
import chatsReducer from './chats/reducer';
import profileReducer from './profile/reducer';

export default createStore(
    combineReducers({
        profile: profileReducer,
        chats: chatsReducer
    }),
    window.__REDUX_DEVTOOL_EXTENSION__ && window.__REDUX_DEVTOOL_EXTENSION__()
);