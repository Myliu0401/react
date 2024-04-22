import RouterContext from '../react-router/routerContext.js';
import { handlePathAndState } from '../history/createBrowserHistory'


export default function Link(props) {


    return (<RouterContext.Consumer>
        {(value) => {
            return handlePath(value, props);
        }}
    </RouterContext.Consumer>);
};


/**
 * 处理 路径 将其转换成 location对象
 * @param {*} value  上下文
 * @param {*} props  属性
 */
function handlePath(value, props) {

    const { to, ...remain } = props; //对属性进行解构


    let path;

    if (typeof (to) === 'string') {
        path = to;

    } else if (typeof (to) === 'object') {
        path = handlePathAndState(to, to.state);
        path.pathname = path.path
    }

    return <a {...remain} href={typeof (path) === 'string' ? to : path.path} onClick={(e) => {
        e.preventDefault(); //取消默认行为 
        value.history.push(path);
    }}>{props.children}</a>
};

