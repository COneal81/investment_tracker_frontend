import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import itemReducer from './reducers/itemReducer'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


let myStore = createStore(itemReducer, composeEnhancers(applyMiddleware(thunk))) 


ReactDOM.render(
  <Provider store={myStore}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);



