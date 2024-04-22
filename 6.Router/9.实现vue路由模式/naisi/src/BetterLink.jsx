



import { Link } from 'react-router-dom';
import routerIfons from './routerConfin';

export default function BetterLink({ to, ...props }) {

    to.pathname = betterRecursion(to.name, routerIfons, '/')

    if (!to.pathname) {
        throw new Error(`name属性值${to.name}无效`)
    };

    return (<Link {...props} to={to}></Link>);
};


/**
 * 
 * @param {*} name 组件命 
 */
function betterRecursion(name, routers, path) {

    for (let item of routers) {
        let newPath = path + item.path;
        newPath = newPath.replace(/\/\//g, "/");

        if (item.name === name) {
            return newPath;
        } else if (Array.isArray(item.children)) {
            newPath = betterRecursion(name, item.children, newPath);
            if (newPath) {
                return newPath;
            }
        }
    };

    return null;

}; 