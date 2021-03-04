import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routing from './component/routing';
import store from './store';
import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Routing />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);