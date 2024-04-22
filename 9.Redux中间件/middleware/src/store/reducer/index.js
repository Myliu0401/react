import Redux from '../../redux源码/index.js';
import student from './student/index.js';
import counter from './counter/index.js';


export default Redux.combineReducers({
  student,
  counter
});