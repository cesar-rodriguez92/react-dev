import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ClaseA from './ClaseA';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ClaseA />, document.getElementById('root2'));
registerServiceWorker();
