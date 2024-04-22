
import Redux /* { createStore, applyMiddleware, bindActionCreators, combineReducers } */ from './store/index.js';
import logger , { createLogger } from 'redux-logger';
import reducer from './store/reducer/index.js';
import { createLoginUserAction } from './store/actions/loginUserAction.js';
import { createAddUserAction, createDeleteUserAction, createSetUserAction } from './store/actions/usersAction.js';
import thunk from 'redux-thunk';

const store = Redux.createStore(reducer, Redux.applyMiddleware(logger));

const actions = Redux.bindActionCreators({
     loginUser: createLoginUserAction,
     addUser: createAddUserAction,
     deleteUser: createDeleteUserAction,
     setUser: createSetUserAction
}, store.dispatch);



window.store = store
window.actions = actions