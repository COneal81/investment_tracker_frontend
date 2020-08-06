import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// set up store in index
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// any component that we wrap in Prodiver will have access to our redux store, wrap our app in here
import { Provider } from 'react-redux'

import App from './App';

// set up store here

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);



