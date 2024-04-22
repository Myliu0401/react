
import RouterContext from './routerContext.js';
import matchPath from './matchPath.js';
import Route from './Route.jsx';

export default function Switch(props) {


    return <RouterContext.Consumer>
        {(value) => {
            handleChildren(value, props);
        }}
    </RouterContext.Consumer>
};


/**
 * 对 children 进行处理判断子项那个匹配到
 * @param {*} value 
 * @param {*} props 
 */
function handleChildren(value, props) {
    let children = null;

    if (Array.isArray(props.children)) {
        children = props.children;
    } else if (props.children === undefined || props.children === null) {
        children = []
    } else if (props.children.type === Route) {
        children = [props.children]
    };

    for (let Component of children) {
        if (Component.type === Route) {
            const obj = matchPath(Component.props.path || '/', value.location.pathname, Component.props);
            if (obj && obj.isExact) {
                return Component;
            }
        } else {
            throw new Error('子项必须是 Route组件');
        }
    };

    return null;
}; 