import rootReducer from './reducer/index.js';
import Redux from '../reudx/index.js';
import { applyMiddleware,bindActionCreators,createStore } from 'redux';
import logger from 'redux-logger';
import { createAsyncIncreaseAction, createIncreaseAction, createAsyncReduceAction, createReduceAction } from './actions/cotnuer.js';
import { createFetchStudentsAction } from './actions/student.js';
import thunk from '../中间件源码/thunk.js';
import promiseMid from '../中间件源码/promise.js';
import { routerMiddleware } from 'connected-react-router'
import history from './history.js';
import { composeWithDevTools } from "redux-devtools-extension"
const routerMid = routerMiddleware(history)

export const store = Redux.createStore(rootReducer, composeWithDevTools(Redux.applyMiddleware(routerMid, thunk, promiseMid, logger)));


const actions = Redux.bindActionCreators({
  createAsyncIncreaseAction,
  createIncreaseAction,
  createAsyncReduceAction,
  createReduceAction,
  createFetchStudentsAction
}, store.dispatch);


window.store = store;
window.actions = actions;

