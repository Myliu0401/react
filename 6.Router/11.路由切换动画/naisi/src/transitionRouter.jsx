import { CSSTransition } from 'react-transition-group';
import { Route } from 'react-router-dom';


export default function TransitionRouter({ component: Component, classNames, timeout, ...res }) {

    return (<Route {...res}>
        {(props) => {
            return (<CSSTransition in={props.match ? true : false} classNames={classNames} timeout={timeout} mountOnEnter={res.mountOnEnter} unmountOnExit={res.unmountOnExit}>
                <Component></Component>
            </CSSTransition>);
        }}
    </Route>);
};