
import RouterContext from '../react-router/routerContext.js';
import { handlePathAndState } from '../history/createBrowserHistory.js'; 

export default function Link(props){
   
     return <RouterContext.Consumer>
        { (value)=>{
          return handlePath(value, props);
        } }
     </RouterContext.Consumer>
};


function handlePath(value, props){
    const { to, ...remain } = props;

    const obj = handlePathAndState(to, to.state, value.history.basename);

    return <a {...remain} href={obj.path} onClick={(event)=>{
          event.preventDefault(); // 取消默认行为
         props.replace ? value.history.replace(to) : value.history.push(to);
    }}>{ props.children }</a>
};
