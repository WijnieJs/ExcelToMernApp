import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import {Provider } from "react-redux"

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

 
import App from './App';
import reducer from "./store/reducer"
 


const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;
// const store = 
// createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
 <BrowserRouter>
    <App />
  </BrowserRouter>

  </Provider>
 
)

ReactDOM.render(
 app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
