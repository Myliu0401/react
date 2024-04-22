
import RouterContext from './routerContext.js';
import matchPath from './matchPath.js';

export default function Route(props) {


    return <RouterContext.Consumer>
        {(value) => {
            /* value参数为最近的上下文 */

            return consumerFunc(value, props);

        }}
    </RouterContext.Consumer>
};


/**
 * 消费者 的children函数   每个Route组件中都有一个生产者的原因是 因为每个组件的上下文中 match都是不同是，都是根据匹配得来的，所以必须创建一个生产者
 * @param {Object} value  上下文 
 * @param {Object} props  属性
 */
function consumerFunc(value, props) {

    const context = {
        history: value.history,
        location: value.location,
        match: matchPath(props.path || '/', value.location.pathname, props)
    }

    return <RouterContext.Provider value={context}>
        {renderChildren(context, props)}
    </RouterContext.Provider>
};


/**
 * 处理多种状态的渲染内容
 * @param {*} context 
 * @param {*} props 
 */
function renderChildren(context, props) {
    /* 
    children 为最高
    render   次之
    component 为最低级
   */

    if(props.children !== undefined && props.children !== null){
        return typeof(props.children) === 'function' ? props.children(...context) : props.children;
    };

    if(typeof(props.render) === 'function' && context.match){
        return props.render(...context);
    };

    if(props.component && context.match){
        return props.component
    };
};