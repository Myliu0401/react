

/**
 * 
 * @param {Object/Function} actions   生成action的函数 或 生成action的函数对象
 * @param {Function} dispatch 
 */
export default function bindActionCreators(actions, dispatch){
      if(typeof(actions) === 'function'){
          return (...surplus)=>{
            const action = actions(...surplus);
            dispatch(action);
          }
      }else if(typeof(actions) === 'object'){
         const enhance = {};
         for(let name in actions){
           if(typeof(actions[name]) === 'function'){
              enhance[name] = (...surplus)=>{
                const action = actions[name](...surplus);
                dispatch(action);
              }
           }
         }
         return enhance
      }else{
        throw new Error('傻屌，第一个参数只能是函数或对象');
      }
};