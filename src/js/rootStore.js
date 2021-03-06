import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './rootReducer';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootStore = createStore(
  rootReducer, composeEnhancers(applyMiddleware(promiseMiddleware())
));

export default rootStore;

/* eslint-enable */
