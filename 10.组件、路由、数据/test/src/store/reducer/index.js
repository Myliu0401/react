import cotnuerReducer from './cotnuer.js';
import studentReducer from './student.js';
import Reudx from '../../reudx/index.js';
import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import history from '../history.js';


export default Reudx.combineReducers({
  cotnuer: cotnuerReducer,
  student: studentReducer,
  router: connectRouter(history)
});

