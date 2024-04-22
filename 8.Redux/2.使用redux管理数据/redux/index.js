
import reducer from './reducer/index.js';
import { createLoginUserAction } from './action/loginUserAction.js';
import { createAddUser, createDeleteUser, createUpdateUser } from './action/usersAction.js';

const { createStore } = Redux;

const store = createStore(reducer);

console.log(store.getState());

store.dispatch(createLoginUserAction('这是令牌'));

console.log(store.getState());

store.dispatch(createAddUser({
  id:Math.random(),
  name:'ccc',
  age:20
}));

console.log(store.getState());

//添加一个监听器
store.subscribe(()=>{
  console.log('触发监听器');
  console.log(store.getState())
});

store.dispatch(createLoginUserAction('这是令牌111'));


window.store = store;
window.createUpdateUser = createUpdateUser;





