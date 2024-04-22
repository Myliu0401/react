import { Route, Switch } from 'react-router-dom';
import routerIfons from './routerConfin.js';

export default function RootRouter() {

    return (<>
        {routerRecursion(routerIfons, '/')}
    </>);

};


function routerRecursion(routerIfons, str) {
    if (!Array.isArray(routerIfons)) {
        return null;
    };
    const s = routerIfons.map((ifon, index) => {
        const { children, component: Component, ...remain } = ifon;
        let newPath = str + remain.path;
        newPath = newPath.replace(/\/\//g, "/");

        return (<Route path={newPath} key={index} exact={remain.exact} render={(value) => {
            return <Component {...value}>
                {routerRecursion(children, newPath)}
            </Component>
        }} />);

    });

    return <Switch>{s}</Switch>;

};