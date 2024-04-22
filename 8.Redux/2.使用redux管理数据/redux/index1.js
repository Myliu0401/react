import reducer from "./reducer/index.js";
import { createLoginUserAction } from './action/loginUserAction.js';
import { createAddUser, createDeleteUser, createUpdateUser } from './action/usersAction.js';

const actions = {
  addUser:createAddUser,
  login:createLoginUserAction
}

const { createStore, applyMiddleware, bindActionCreators } = Redux;


const logger1 = (store)=>{

  return (dispacth)=>{
    
    return (action)=>{
         console.log('中间件1')
         console.log('旧数据1',store.getState())
         console.log('')
        // store.dispatch(action)
       
         dispacth(action)
         console.log('新数据1',store.getState())
         console.log('action1',action)
         console.log('')
         
    }
  }
};


const logger2 = (store)=>{

  return (dispacth)=>{
    
    return (action)=>{
         console.log('中间件2')
         console.log('旧数据2',store.getState())
         console.log('')
         dispacth(action)
       
         console.log('新数据2',store.getState())
         console.log('action2',action)
         console.log('')
         
    }
  }
};

const store = applyMiddleware(logger1, logger2)(createStore)(reducer);

const action = bindActionCreators(actions, store.dispatch);

window.action = action
//store.dispatch(createLoginUserAction('令牌'))
//console.log(store)

//window.store = store




