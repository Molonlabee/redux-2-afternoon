import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDom.render(
//give app access to store by wrapping it in provider.
  <Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));

serviceWorker.unregister();

