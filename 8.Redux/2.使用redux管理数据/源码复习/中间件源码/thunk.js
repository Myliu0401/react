

/**
 * 创建能处理副作用的中间件
 * @param {*} extra 
 */
function createThunkMiddleware(extra){
     return (store)=>{

         return (dispatch)=>{

             return (action)=>{
                   if(typeof(action) === 'function'){
                      action(store.dispatch, store.getState, extra);
                   }else if(action.__proto__ === Object.prototype){
                      dispatch(action); // 继续往后提交
                   } 
             }
         }
     }
};


const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;