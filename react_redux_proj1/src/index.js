import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import Store from './store.js'

const StoreInstante = Store();

ReactDOM.render(
    <Provider store={StoreInstante}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
