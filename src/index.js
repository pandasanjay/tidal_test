import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import setupStore from './redux/store';

import './index.css';
import App from './App';

ReactDOM.render(
    <Provider store={setupStore()}>
        <App />
    </Provider>,
    document.getElementById('root'));
