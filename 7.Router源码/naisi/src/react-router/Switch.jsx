import Route from './Route.jsx';
import matchPath from './matchPath.js';
import RouterContext from './routerContext.js'

export default function Switch(props) {


    return <RouterContext.Consumer>
        {(value) => {
            return handleChildren(props, value);
        }}
    </RouterContext.Consumer>


};


/**
 * 对 children 进行处理判断子项那个匹配到
 * @param {*} props   属性
 * @param {*} value   上下文数据
 */
function handleChildren(props, value) {
    let children = [];

    if (props.children === undefined || props.children === null) {
        children = [];
    } else if (Array.isArray(props.children)) {
        children = props.children;
    } else {
        children = [props.children];
    };


    for (let item of children) {
        if (item.type === Route) {
            const obj = matchPath(item.props.path || '/', value.location.pathname, item.props);
            const isExact = obj ? obj.isExact : false;
            if (isExact) {
                return item;
            };
        } else {
            throw new Error('子项只能是 Route标签');
        }
    };


    return null;
};