import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'typeface-roboto';
import './index.css';
import './utilities/saveAs';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';


const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();
