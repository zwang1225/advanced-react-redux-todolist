import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import TodoApp from './containers/todoApp/todoApp';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './reducers';
import {createLogger} from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const loggerMiddleware = createLogger({collapsed: true});
const store = createStore(rootReducers,composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
