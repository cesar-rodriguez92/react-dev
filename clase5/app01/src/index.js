import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { reducer as formReducer } from 'redux-form';


//const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const rootReducer = combineReducers({
  form: formReducer,
});


//const store = createStore(rootReducer, enhancer);
const store = createStore(rootReducer);

const Root = <Provider store={store}><App /></Provider>;

ReactDOM.render(Root, document.getElementById('root'));
