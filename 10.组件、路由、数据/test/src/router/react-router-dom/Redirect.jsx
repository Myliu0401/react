
import RouterContext from '../react-router/routerContext.js';
import { splicingPath } from '../history/createBrowserHistory.js';
import matchPath from '../react-router/mathchPath.js';


export default function Redirect(props){
   return (<RouterContext.Consumer>
      { (context)=>{
           const { to = '/', push = false, exact = false, sensitive = false, strict = false  } = props;
        
           let path;
           
           if(typeof(props.to) === 'object'){
              const newPath = splicingPath(to.pathname, context.history.basename);
              path = {
                ...to,
                pathname: newPath
              }
           };

           if(typeof(props.to) === 'string'){
              path = {
                pathname: to
              }
           };

          
          const match = matchPath(path.pathname, context.history.basename, {
            exact,
            sensitive,
            strict
          });


          if(push){
            setTimeout(()=>{
              context.history.push(to, to.state);
            })
            
          }else{
            setTimeout(()=>{
              context.history.replace(to, to.state);
            })
          }

         return null;

      } }
   </RouterContext.Consumer>);
};