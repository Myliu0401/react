import matchPath from '../react-router/matchPath.js';
import RouterContext from '../react-router/routerContext.js';
import { targetLocation } from '../history/createBrowserHistory.js';
import Link from './Link.jsx';

export default function NavLink(props) {



    const { exact = false, sensitive = false, strict = false, activeClass = 'active', ...remain } = props;

    return (<RouterContext.Consumer>
        {(value) => {
            let loc = props.to;
            if (typeof (props.to) === 'string') {
                loc = targetLocation({ path: props.to });
            }

            const is = matchPath(loc.pathname, value.location.pathname, {
                exact,
                sensitive,
                strict,
            });

            if (is) {
                return <Link {...remain} className={activeClass}></Link>
            } else {
                return <Link {...remain}></Link>
            }
        }}
    </RouterContext.Consumer>);
};
