import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// set up store in index
import { createStore, applyMiddleware, compose } from 'redux'
// compose allows you to pass more than one middleware, combines a couple of different middlewares
// into one, enabling you to pass just one argument into createStore.
import thunk from 'redux-thunk'
// any component that we wrap in Prodiver will have access to our redux store, wrap our app in here
import { Provider } from 'react-redux'
import itemReducer from './reducers/itemReducer'

import App from './App';

// gives us access to Redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// an actions that we will be dispatching to our reducer, which really is just an action object that we will be sending to our reducer,
// and our reducer is responsible for taking in that action object and deciding based on the way that you have 
// set up your reducer it will have those conditions in there, deciding what we want to update about or current 
// store. The reducer will return a new version of that store.


// Where you store your data globally, dispatch sends over the action objectimported  to the itemReducer which inturn updates the store
let myStore = createStore(itemReducer, composeEnhancers(applyMiddleware(thunk))) 

// allows us to 

ReactDOM.render(
  // store={myStore} gives our app access to our store
  <Provider store={myStore}>
    <App />
    {/* any component child of App will have access to the store */}
  </Provider>,
  document.getElementById('root')
);



