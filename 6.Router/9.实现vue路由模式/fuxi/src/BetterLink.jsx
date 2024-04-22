

import { NavLink } from "react-router-dom";
import router from './routerConfin.js';


export default function BetterLink({ to, ...props }) {
  to.pathname = betterRecursion(to.name, router, '/');

  if (!to.pathname) {
    throw new Error(`name属性值 ${to.name} 无效`)
  } else {
    return (<NavLink to={to} {...props} exact={true} strict></NavLink>)
  }
};



function betterRecursion(name, router, path) {

  for (let item of router) {
    let newPath = path + item.path;
    newPath = newPath.replace(/\/\//g, '/');
    if (item.name === name) {
      return newPath
    } else if (Array.isArray(item.children)) {
      newPath = betterRecursion(name, item.children, newPath);
      if (newPath) {
        return newPath
      }
    }
  };

  return null
};