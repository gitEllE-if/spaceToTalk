import { combineReducers, createStore } from 'redux';
import profileReducer from './profile/reducer';

export default createStore(
    combineReducers({
        profile: profileReducer
    }),
    window.__REDUX_DEVTOOL_EXTENSION__ && window.__REDUX_DEVTOOL_EXTENSION__()
);