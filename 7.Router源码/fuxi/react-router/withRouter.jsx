




import RouterContext from './routerContext.js';


export default function withRouter(Component) {
    return function RouterWrapper(props) {
        return <RouterContext.Consumer>
            {(value) => {
                return <Component {...value} {...props}></Component>
            }}
        </RouterContext.Consumer>
    }
};