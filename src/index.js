import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Assets/css/default.min.css';







ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
