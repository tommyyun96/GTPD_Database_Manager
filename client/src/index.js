import 'react-app-polyfill/ie9'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

/* bootstrap addon */
import 'bootstrap/dist/css/bootstrap.min.css'

/* Custom css addon */
import './asset/base.css'

/* fontawesome addon */
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();