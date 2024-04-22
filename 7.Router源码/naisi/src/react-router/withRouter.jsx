import RouterContext from './routerContext.js';



export default function withRouter(Comp) {
    return function RouterWrapper(props) {
        return <RouterContext.Consumer>
            {(value) => {
                return <Comp {...value} {...props}></Comp>
            }}
        </RouterContext.Consumer>
    }
};