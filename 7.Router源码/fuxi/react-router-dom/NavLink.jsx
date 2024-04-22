


import RouterContext from '../react-router/routerContext.js';
import matchPath from '../../naisi/src/react-router/matchPath.js';
import Link from './Link.jsx';


export default function NavLink(props){

    const { exact = false, sensitive = false, strict = false, activeClass = 'active', ...remain } = props;

     return <RouterContext.Consumer>
        { (value)=>{


            const obj = matchPath(typeof(props.to) === 'Object' ? props.to.pathname : props.to,
              value.location.pathname,
              { exact, sensitive, strict }
            );
  
            return <Link {...remain} calssName={obj ? activeClass : ''}> { props.children } </Link>
           

        } }
     </RouterContext.Consumer>
};