import  RouterContext  from '../react-router/routerContext.js';
import matchPath from '../react-router/mathchPath.js';
import Link from './Link.jsx';
import { createSpecifyLocation } from '../history/createBrowserHistory.js';


export default function NavLink(props){
     return (<RouterContext.Consumer>
       { (context)=>{
          
          const { exact = false, sensitive = false, strict = false, activeClass = 'active', classname = '', ...surplus } = props;
      
          
          const ifon = createSpecifyLocation({ newPath: typeof(props.to) === 'object' ? props.to.pathname : props.to });
      
          // 判断是否匹配到
          const macth = matchPath(ifon.pathname, context.location.pathname, {
            exact,
            sensitive,
            strict
          });


          const classnamel = macth ? classname + activeClass : classname;
          
          return (<Link {...surplus} className={classnamel} ></Link>);

       } }
     </RouterContext.Consumer>);
};