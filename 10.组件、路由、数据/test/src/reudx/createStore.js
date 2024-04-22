

/**
 * 创建仓库的函数
 * @param {Function} reducer  用于改变数据的函数 
 * @param {*} defaultState  默认状态 
 * @param {Function} middleware 用于固定中间件的函数，可传可不传
 * @returns 
 */
export default function createStore(reducer, defaultState, middleware){


    let thereMiddleware = null; // 存储中间件固定函数

    // 判断是否有中间件
    if((typeof(defaultState) === 'function' && !middleware) || (typeof(middleware) === 'function')){
      thereMiddleware = (typeof(defaultState) === 'function' && !middleware) ? defaultState : middleware;
    };


    if(thereMiddleware){
                            // 判断第二个参数是否是中间件固定函数
      const defaultState1 = (typeof(defaultState) === 'function' && !middleware) ? undefined : defaultState;
      const store = thereMiddleware(createStore)(reducer, defaultState1);
      return store
    }


    let currentReducer = reducer; // 当前改变数据的reducer函数
    let currentState = defaultState; // 当前状态数据
    let listens = []; // 用于装监听器的数据



    /**
     * 用于获取当前的状态数据
     * @returns 
     */
    function getState(){
       return currentState
    };


    /**
     * 用于分发一个action   该函数会告诉仓库，仓库告诉reducer，reducer返回新状态给仓库进行保存
     * @param {Object} action 描述对象 
     */
    function dispatch(action){
         
        // 判断是否不是对象
        if(typeof(action) !== 'object'){
              throw new Error('傻屌，你传的参数不是一个对象');
        };

        // 判断有没有type属性
        if(action.type === undefined){
          throw new Error('傻屌，你传的action对象没有type属性');
        };

        // 判断是否不是一个平面对象
        if(Object.getPrototypeOf(action) !== Object.prototype){
          throw new Error('傻屌，你传的action对象不是一个平面对象');
        };

        
       const newState = currentReducer(currentState, action);
        
       currentState = newState;

       // dispatch完后触发监听器
       
       for(const monitor of listens){
          
          monitor();
       }
       
        return action;

    };

    /**
     * 用于添加一个监听器 
     * @param {*} monitor 监听器函数
     */
    function subscribe(monitor){
         // 判断参数是否不是一个函数
         if(typeof(monitor) !== 'function'){
             throw new Error('傻屌，你传的参数不是一个函数');
         };

         listens.push(monitor);

         return ()=>{
           if(listens.includes(monitor)){
               const index = listens.indexOf(monitor);
               listens.splice(index,1)
           }
         }
    };


    /**
     * 用于替换掉当前的reducer
     * @param {*} reducer 改变数据的reducer函数
     */
    function replaceReducer(reducer){
          if(typeof(reducer) !== 'function'){
            throw new Error('傻屌，你传的参数不是一个函数');
          }
          currentReducer = reducer
    };


    // 创建仓库是调用一次dispatch
    dispatch({
      type: '@@redux/INIT' + Math.random().toString(36).slice(2,7).split('').join('.')
    });

    return {
        getState, 
        dispatch,
        subscribe,
        replaceReducer
    }
};