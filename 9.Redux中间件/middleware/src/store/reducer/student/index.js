import conditionReducer from './condition.js';
import studentReducer from './student.js';
import Redux from '../../../redux源码/index';


export default Redux.combineReducers({
  conditionData:conditionReducer,
  studentData:studentReducer
});