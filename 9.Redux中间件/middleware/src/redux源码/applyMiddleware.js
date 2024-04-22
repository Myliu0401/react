


/**
 * 中间件固定函数
 * @param  {...any} middlewares 收集的中间件
 */
export default function applyMiddleware(...middlewares) {

  /**
   * 固定创建仓库
   * @param { Function } cretaionStore 创建仓库的函数
   */
  return function fixedCreation(cretaionStore) {


    /**
     * 创建仓库的函数
     * @param { Function } reducer 处理数据的函数
     * @param {...} defaultValue 仓库的默认值
     */
    return function createWarehouse(reducer, defaultValue) {

      const store = cretaionStore(reducer, defaultValue);

      let dispatch = () => {
        throw new Error('当前dispatch尚不能用');
      };

      // 简易版仓库
      const simpleVersionStore = {
        getState: store.getState,
        dispatch: (...age)=>{
            return dispatch(...age);
        }
      };

      //根据中间件数组，得到一个dispatch创建函数的数组
      const dispatchProducers = middlewares.map((func) => {
        return func(simpleVersionStore) // 中间件函数 最外层函数 使作用域拥有 仓库
      });

      dispatch = blendMiddleware(dispatchProducers)(store.dispatch);

      return {
        ...store,
        dispatch
      };
    }
  }
};


/**
 * 混合中间件
 * @param {Array} middlewares dispatch创建函数的数组
 */
function blendMiddleware(middlewares) {

  const method = '方法三'

  if (!middlewares.length) {
    return (dispatch) => {
      return dispatch
    }
  }

  //三种 将函数 作用域 叠起来的方法
  if (method === '方法一') {
    if(middlewares.length === 0){
        return middlewares[0]
    }

    return middlewares.reduce((func1, func2) => {
      return (dispacth) => {
        return func1(func2(dispacth))
      }
    });

  } else if (method === '方法二') {

    return (dispatch) => {
      // 利用数组的累积方法进行 链接作用域
      return middlewares.reverse().reduce((func1, func2) => {
        return func2(func1)
      }, dispatch); //两参数的情况下 必须对数组进行倒序，--- 原理问题
    };

  } else {


    /**
    * @param {Function} dispatch 最初始的 dispatch 函数
    */
    return function comprehensive(dispatch) {
      let lastTime = dispatch // 保存上一次 dispatch创建函数返回的 dispatch加强版函数

      for (let i = middlewares.length - 1; i >= 0; i--) {

        lastTime = middlewares[i](lastTime)
      };

      return lastTime;
    }


  }










};