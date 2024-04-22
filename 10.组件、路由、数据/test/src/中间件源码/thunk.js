
/**
 * 创建一个thunk中间件
 * @param {*} extra 
 */
function createThunkMiddleware(extra){

    // 返回一个中间件
    return (store)=>{

        return (dispatch)=>{

           return (action)=>{
        
              if(typeof(action) === 'function'){
                 return action(store.dispatch, store.getState, extra);
              }else if(action.__proto__ === Object.prototype){
                return dispatch(action);
              }else{
                return dispatch(action);
              }
           }
        }
    }
}


const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;