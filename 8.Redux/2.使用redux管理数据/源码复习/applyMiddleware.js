


/**
 * 固定中间件
 * @param  {...any} middleware 中间件函数
 */
export default function applyMiddleware(...middleware) {

    /**
      * 固定仓库
      * @param  {function} createStore 仓库创建函数
    */
    return function (createStore) {



        /**
          * 创建仓库
          * @param  {function} reducer 处理函数
          * @param  {*} defaultState 默认状态
        */
        return function (reducer, defaultState) {

            const store = createStore(reducer, defaultState);

            // 简易版的store
            const simplifiedStore = {
                getState: store.getState,
                dispatch: store.dispacth,
            };

           // 生成最终的dispatch,融合了中间件
           const ultimateDispatch = middleware.map((callback) => {
                return callback(simplifiedStore);
            }).reverse().reduce((dispacth, middleware) => { 
                    return middleware(dispacth); 
            }, simplifiedStore.dispatch);

            store.dispacth = ultimateDispatch; // 修改仓库的dispacth函数

            return store;
        }

    };
};

