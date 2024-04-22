
import RouterContext from './routerContext.js';

export default function withRouter(Component){
    return function RouterWrapper(props){
       return (<RouterContext.Consumer>
           { (context)=>{
              return <Component {...props} {...context}></Component>
           } }
        </RouterContext.Consumer>) 
    }
};