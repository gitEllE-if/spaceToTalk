import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import chatsReducer from './chats/reducer';
import messagesReducer from './messages/reducer';
import profileReducer from './profile/reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    combineReducers({
        profile: profileReducer,
        chats: chatsReducer,
        messages: messagesReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);