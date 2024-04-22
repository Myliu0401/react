
// promise中间件
export default function promiseMiddleware(store){

     return (dispatch)=>{

           return (action)=>{
                // 判断action是否符合条件 是否符合 flux的action
                if(isFSA(action)){

                  // 判断action的payload属性是否是一个 promise
                  const isPromise = action.payload.__proto__ === Promise.prototype;

                   return isPromise ? action.payload.then((payload)=>{
                    store.dispatch({
                      ...action,
                      payload
                    });  // 重新开始提交
                   }).catch((err)=>{
                    store.dispatch({
                      ...action,
                      payload: err,
                      err: true
                    }); //重新开始提交
                   }) : dispatch(action); // 正常提交 action 给后续

                };

                // 判断 action是否是一个 promise对象
                const isPromise = action.__proto__ === Promise.prototype;

                //                  重新提交                      正常提交给后续
                return isPromise ? action.then(store.dispatch) : dispatch(action);

           }
     }
};


/**
 * 判断 action 是否符合 标准flux的action
 * @param {Object} action  
 */
function isFSA(action){
      
    // 判断 action 是否是一个平面对象
    const isPlain = action.__proto__ === Object.prototype;

    // 判断 action里的type属性是否是字符串类型
    const isStrType = typeof(action.type) === 'string';

    // 判断 action是否只包含flux标准的属性 标准属性["type", "payload", "error", "meta"]
    const isStandard = Object.keys(action).every((key) => ["type", "payload", "error", "meta"].includes(key));

    return isPlain && isStrType && isStandard

  
};