import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import todosReducer from './reducers/todos';


const store = createStore(todosReducer);
const Root = <Provider store={store}><App/></Provider>

ReactDOM.render(Root , document.getElementById('root'));
