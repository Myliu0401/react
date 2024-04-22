import matchPath from './matchPath.js';
import RouterContext from './routerContext.js';
import React from 'react';





export default function Route(props) {

    return <RouterContext.Consumer> 
       
        {(value) => {
          /* value参数为上下文 */

            /* 因为consumerFunc函数要得到props属性，所以只能在嵌套一个函数并且在里面中传过去 */
            return consumerFunc(value, props);
        }}
    </RouterContext.Consumer>

};


/**
 * 消费者 的children函数   每个Route组件中都有一个生产者的原因是 因为每个组件的上下文中 match都是不同是，都是根据匹配得来的，所以必须创建一个生产者
 * @param {*} value 上下文
 * @param {*} props 属性
 */
function consumerFunc(value, props) {

   // const newContext = React.createContext(); //创建新的上下文对象,不能采用新创建的上下文

    //新上下文数据
    const context = {
        location: value.location,
        history: value.history,
        match: matchPath(props.path || '/', value.location.pathname, props)
    };

    return (<RouterContext.Provider value={context}>
        {renderChildren(context, props)}
    </RouterContext.Provider>);
};


/**
 * 处理多种状态的渲染内容
 * @param {*} context   新上下文
 * @param {*} props         属性
 */
function renderChildren(context, props) {

    /* 
       children 为最高
       render   次之
       component 为最低级
    */

    if(!context.match){
        return null;
    };

    //判断children有没有传值
    if (props.children !== undefined && props.children !== null) {
        if (typeof (props.children) === 'function') {
            return props.children(...context);
        } else {
            return props.children;
        }
    };


    if (typeof (props.render) === 'function') {
        return props.render(context);
    };

    if (props.component && context.match) {
        const Component = props.component;
        return <Component {...context}></Component>
    };

    return null;
};