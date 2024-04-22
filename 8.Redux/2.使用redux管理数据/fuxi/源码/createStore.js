

/**
 * 创建store仓库
 * @param {Function} reducer 用于改变数据的函数
 * @param {*} defaultState   默认值
 * @param {Function} middleware  用于固定中间件的函数，可不传
 */
export default function createStore(reducer, defaultState, middleware) {

    let thereMiddleware = null; // 存储中间件函数

    const isStateFunc = typeof (defaultState) === 'function' ? true : false;
    const isMiddFunc = typeof (middleware) === 'function' ? true : false;

    if (isStateFunc && !isMiddFunc || !isStateFunc && isMiddFunc) {
        thereMiddleware = isStateFunc ? defaultState : middleware;
    };

    if (thereMiddleware) {
        const newDefaultState = isStateFunc ? undefined : defaultState;
        return thereMiddleware(createStore)(reducer, newDefaultState);
    };

    let state = null; // 状态数据
    let currentReducer = reducer; // 当前的reducer
    let listens = []; // 存储监听器的数组

    function getState() {
        return state
    };

    function dispatch(action) {

        if (Object.prototype.toString.call(action) !== '[object Object]') {
            throw new Error('action 必须是一个对象');
        };

        // 判断是否是一个平面对象
        if (Object.getPrototypeOf(action) !== Object.prototype) {
            throw new Error('action 必须是一个平面对象');
        };

        if (!('type' in action)) {
            throw new Error('action中必须要有type属性');
        };

        state = currentReducer(action); // 修改仓库的数据

        for(monitor of listens){
           monitor();
        };

        return action;
    };

    function subscribe(monitor) {
        
        if(typeof(monitor) !== 'function'){
           throw new Error('监听器 必须是一个函数');
        };

        listens.push(monitor);
        return () => {
            listens.splice(listens.indexOf(monitor), 1);
        }
    };

    function replaceReducer(reducer){
        if(typeof(reducer) !== 'function'){
          throw new Error('reducer 必须是一个函数');
        }
        currentReducer = reducer;
    };


    dispatch({ tpye: '@@redux/INIT' + Math.random().toString(36).slice(2,7).split('').join('.') });

    return {
        dispatch,
        getState,
        replaceReducer,
        subscribe
    }
};