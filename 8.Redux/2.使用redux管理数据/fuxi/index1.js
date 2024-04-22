import actionType from './redux/action/actionType.js';
import numberAction from './redux/action/numberAction.js';

const { createStore, bindActionCreators } = Redux;



/**
 * 处理器 由仓库来进行触发
 * @param {*} state    仓库中的状态
 * @param {*} action   描述对象
 */
function reducer(state, action){
   if(action.type === actionType.INCREASE){
       return state + 1
   }else if(action.type === actionType.REDUCE){
       return state - 1
   }else if(action.type === actionType.SET){
       return action.payload
   }else{
       return state
   }
};


// 创建仓库
const store = createStore(reducer, 10);


// 创建增强版的action创建函数
const bindAction = bindActionCreators(numberAction, store.dispatch);


window.bindAction = bindAction;
window.store1 = store;

