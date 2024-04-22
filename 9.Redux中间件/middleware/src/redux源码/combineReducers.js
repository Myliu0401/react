

/**
 * 合并 reducer 的函数
 * @param {Object} reducers  对象
 */
export default function combineReducers(reducers){
        
  // 进行验证
  verification(reducers);

  // 返回一个合并后的 reducer
  return (state = {}, action)=>{
       const newState = {};

       for(let name in reducers){
          newState[name] = reducers[name](state[name], action);
       } 

       return newState
  }
};


/**
 * 验证 reducers
 * @param {Object} reducers 对象
 */
function verification(reducers){
  
   if(typeof(reducers) !== 'object'){
        throw new Error('傻屌，参数必须是一个对象');
   };

   if(Object.getPrototypeOf(reducers) !== Object.prototype){
      throw new Error('傻屌，参数必须是一个平面对象');
   };

  // reducers 里的函数返回结果不能是 unedfined
  for(let name in reducers){
    const reducer = reducers[name];

    
    let state = reducer(undefined, {
        type: `@@redux/INIT${Math.random().toString(36).substr(2, 6).split("").join(".")}`,
    });
    
    if(state === undefined){
       throw new Error(`傻屌 ${name}函数 返回的状态不能是 unedfined`);
    };

   // 这次验证防止硬编码
    state = reducer(undefined, {
      type: `@@redux/PROBE_UNKNOWN_ACTION${Math.random().toString(36).substr(2, 6).split("").join(".")}`,
    });
  };

};