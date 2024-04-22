import applyMiddleware from './applyMiddleware.js';



/**
 * 创建仓库
 * @param {function} reducer   处理器 
 * @param {*} defaultState     默认状态/固定中间键的函数
 * @param {*} middleware       固定中间键的函数
 */
export default function createStore(reducer, defaultState, middleware) {

     let middlewareFixedFunction = null;

     // 存储中间件操作
     if ((typeof (defaultState) === 'function' && !middleware)) {
          middlewareFixedFunction = defaultState;
          defaultState = null;
     } else if (typeof (middleware) === 'function') {
          middlewareFixedFunction = middleware;
     };

     // 判断有没有中间件
     if (middlewareFixedFunction) {
          return middlewareFixedFunction(createStore)(reducer, defaultState)
     };


     let state = defaultState; // 仓库状态
     let handleReducer = reducer; // 处理器
     let listrsMonitors = []; // 存储监听器


     /**
      * 分发
      * @param {*} action  描述对象
      * @returns 
      */
     const dispacth = (action) => {

          if (Object.prototype.toString.call(action) !== '[object Object]') {
               throw new Error('action 必须是一个对象');
          } else if (action.__prop__ !== Object.prototype) {
               throw new Error('action 必须是一个普通的平面对象');
          } else if (!('type' in action)) {
               throw new Error('action对象中必须要有type属性');
          }

          state = handleReducer(state, action);

          // 触发监听器
          for (let monitor of listrsMonitors) {
               monitor();
          };

          return state;
     };

     /**
      * 获取当前仓库
      * @returns 
      */
     const getState = () => {
          return state;
     };

     /**
      * 替换当前处理器
      * @param {function} reducer 处理器
      */
     const replaceReducer = (reducer) => {
          handleReducer = reducer;
     };


     /**
      * 添加监听器
      * @param {function} monitor 
      */
     const subscribe = (monitor) => {
          listrsMonitors.push(monitor);

          return () => { // 取消监听器
               const index = listrsMonitors.findIndex((callback) => { return callback === monitor });
               listrsMonitors.splice(index, 1);
          };
     };


     const store = {
          dispacth, // 分发
          getState, // 获取当前仓库
          replaceReducer, // 替换掉当前 处理器
          subscribe, // 监听器
     };

     
     // 创建仓库时会调用一次
     dispacth({
          type: '@@redux/INIT' + Math.random().toString(36).slice(2,7).split('').join('.')
     });

     return store;
};
