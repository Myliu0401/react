import { useContext, useState, useEffect } from 'react';
import context from "./context.js";
import Redux from '../reudx/index.js'

/**
 * 将组件跟仓库链接的函数
 * @param {Function} mapStateToProps    返回状态对象的函数
 * @param {Function/Object} mapDispatchToProps  返回对象处理函数
 * @returns 高阶组件
 */
export default function connect(mapStateToProps, mapDispatchToProps) {
  return function hocTemp(Component) {
    return function Temp(props) {
      const store = useContext(context); // 获取上下文,该上下文为仓库

      // eslint-disable-next-line no-unused-vars
      const [state, setState] = useState(typeof (mapStateToProps) === 'function' && mapStateToProps(store.getState()));

      const handlers = getEventHandlers(mapDispatchToProps, store, props);

      useEffect(() => {
        // 监听仓库中属性的变化
        return store.subscribe(() => {
          const newState = typeof (mapStateToProps) === 'function' && mapStateToProps(store.getState())
          setState((oldState) => {
            return shallowComparison(oldState, newState) ? newState : oldState;
          });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);


      return <Component {...state} {...props} {...handlers}></Component>
    };

  };
};

/**
 * 对象参数进行浅比较
 * @param {Object} oldState   旧状态 
 * @param {Object} newState   新状态
 * @returns 布尔值
 */
function shallowComparison(oldState, newState) {
  for (const key in oldState) {
    if (oldState[key] !== newState[key]) {
      return true
    }
  }
  return false;
};


/**
 * 验证并处理mapDispatchToProps
 * @param {Function/Object} mapDispatchToProps 
 * @param {Object} store    状态仓库
 * @returns 处理后的对象
 */
function getEventHandlers(mapDispatchToProps = {}, store, props) {
  if (mapDispatchToProps) {
    if (typeof (mapDispatchToProps) === 'function') {
      return mapDispatchToProps(store.dispatch, props);
    } else if (typeof (mapDispatchToProps) === 'object') {
      return Redux.bindActionCreators(mapDispatchToProps);
    };
    return mapDispatchToProps;
  };
  return mapDispatchToProps;
};
