
const { createStore } = Redux;

/**
 * 处理器  处理器由仓库来进行触发
 * @param {*} state  仓库中的数据
 * @param {*} action 描述对象
 */
function reducer(state, action){
     if(action.type === 'reduce'){
       return state - 1
     }else if(action.type === 'increase'){
       return state + 1
     };

     return state;
};


// 创建一个仓库
const store = createStore(reducer, 10); // 该函数的会将处理器添加进仓库

// 描述对象
const action = {
  type: 'increase',
  payload: '' // 附荷
};


store.dispatch(action); // 向仓库进行分发


console.log(store.getState());