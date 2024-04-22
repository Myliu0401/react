import Reducer from "./reducer/index.js";
import Redux from "../redux源码/index.js";
import { createConditionAction } from './actions/student/condition.js';
import { createstudentTypeAction, createisLoadingTypeAction, fetchStudents } from './actions/student/student.js';
import { createIncreaseAction,  createReduceAction } from './actions/counter/index.js';
import logger  from 'redux-logger'
import thunk from '../中间件源码/thunk.js';
import promiseMiddleware from "../中间件源码/promise.js";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/index.js';

const sagaMid = createSagaMiddleware(); // 创建一个 saga中间件

const store = Redux.createStore(Reducer, Redux.applyMiddleware(sagaMid, logger));


// 传一个生成器函数作为saga任务
sagaMid.run(rootSaga); //启动saga任务

window.actions = Redux.bindActionCreators({
  createConditionAction,
  createstudentTypeAction,
  createisLoadingTypeAction,
  fetchStudents,
  createIncreaseAction,
  createReduceAction
}, store.dispatch);

window.store = store;