import { createStore, bindActionCreators } from 'redux';
import * as actionsType from './action/action-type.js';
import * as numberAction from './action/number-action.js';

/**
 * 处理器  每个数据都有一个 处理器    该处理器由仓库触发
 * @param {*} state  仓库中的旧数据
 * @param {*} action 描述对象
 */
/* function reducer(state, action) {
    if (action.type === 'reduce') {
        return state + 1;
    } else if (action.type === 'increase') {
        return state - 1;
    } else {
        return state
    }
}; */


function reducer(state, action) {
    if (action.type === actionsType.INCREASE) {
        return state - 1;
    } else if (action.type === actionsType.DECREASE) {
        return state + 1;
    } else if (action.type === actionsType.SET) {
        return action.payload
    } else {
        return state;
    }
};




//创建一个仓库
const store = createStore(reducer, 10);  //第一个参数为处理器，第二个参数为仓库数据的默认值
//创建的创库中 就会有 数据和处理器



//描述对象
const action = {
    type: 'reduce',
    payload: '',
};

store.dispatch(action); //进行分发给数据仓库

console.log(store.getState()); // 得到仓库中当前的数据

const bindAction = bindActionCreators(numberAction, store.dispatch);

window.bindAction = bindAction;
window.store = store;

