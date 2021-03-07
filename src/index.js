import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { MUI_THEME } from './muiTheme';
import Routing from './component/routing';
import store from './store';
import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <MuiThemeProvider theme={MUI_THEME}>
                <Routing />
            </MuiThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);