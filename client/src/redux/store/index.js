import {legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
// import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducer/reducer.js';
import thunk from 'redux-thunk';

const composeEnhancers =
   (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
   compose;

const store = createStore (
   rootReducer,
   composeEnhancers(applyMiddleware(thunk)),
);

// const store = createStore(
//    rootReducer, applyMiddleware(thunk)
// )

export default store;