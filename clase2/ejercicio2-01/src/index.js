import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import C1 from './C1';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<C1 />, document.getElementById('div1'));
registerServiceWorker();
