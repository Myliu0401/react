
import { CALL_HISTORY_METHOD } from './actionTypes.js'


/**
 * 创建一个中间件， 用于拦截跳转
 * @param {Object} history  对象
 */
export default function routerMiddleware(history){
     return (store)=>{

       return (dispatch)=>{

         return (action)=>{

             if(action.type === CALL_HISTORY_METHOD){
                
                  const { method, ...args } = action.payload;
                    
                  history[method](...args)
                
                return // 不继续向下传递 action
             }

             dispatch(action)
         }
       }
     }
};