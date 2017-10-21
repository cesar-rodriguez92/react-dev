import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import todosReducer from './reducers/todos';
import notesReducer from './reducers/notes';

const reducer = combineReducers({
  todos: todosReducer,
  notes: notesReducer
});

const store = createStore(reducer);

const Root = <Provider store={store}><App/></Provider>

ReactDOM.render(Root , document.getElementById('root'));
