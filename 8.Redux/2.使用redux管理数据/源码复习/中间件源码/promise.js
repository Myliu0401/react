



export default function promiseMiddleware(store){
     

     return (dispatch)=>{
 

        return (action)=>{
              
            // 判断action是否符合flux的action
            if(isFSA(action)){

               if(action.payload.__prop__ === Promise.prototype){ // 判断payload是否是一个promise
                  action.payload.then((data)=>{ dispatch({ ...action, payload: data }) });
               }else{
                  dispatch(action);
               }

            }else if(action.__prop__ === Promise.prototype){ // 判断action是否是一个promise
                action.then((data)=>{ dispatch({ ...action, payload: data }) })
            }else{
                dispatch(action);
            }
               

        }
     }

};


/**
 * 判断 action 是否符合 标准flux的action
 * @param {*} action 
 */
function isFSA(action){
    
    const isPlain = action.__prop__ === Object.prototype; // 判断是否是一个平面对象
    
    const isStrType = typeof(action.type) === 'string'; // 判断是否是一个字符串类型

    const standardAttributes = ["type", "payload", "error", "meta"]; // 标准属性

   const isKsy = Object.keys(action).every((key)=>{ return standardAttributes.includes(key) });

    return isPlain && isStrType && isKsy;
};


