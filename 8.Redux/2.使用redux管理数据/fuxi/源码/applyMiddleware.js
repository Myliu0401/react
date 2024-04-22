
import createStore from "./createStore.js";

/**
 * 固定中间件
 * @param  {...any} middlewares 
 */
export default function applyMiddleware(...middlewares){
 
     return (newCreateStore)=>{
        
          if(newCreateStore !== createStore){
                throw new Error('参数必须是 createStore函数');
          };

          return (reducer, defaultState)=>{
             
              const store = newCreateStore(reducer, defaultState);

              let dispatch = (action)=>{
                  throw new Error('此时 dispatch尚不能用');
              };

              const easyVersionStore = {
                 getState: store.getState,
                 dispatch(...age){
                  return dispatch(...age)
                 }
              };

              dispatch = middlewares.map((middleware)=>{ middleware(easyVersionStore) }).reduce((prev, cur)=>{
                 return (dispacth)=>{ return prev(cur(dispacth)) }
              })(store.dispatch);

              return {
                ...store,
                dispatch
              };

          };

     };
};
