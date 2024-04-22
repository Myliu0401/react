
import routerContext from './routerContext.js';
import matchPath from './mathchPath.js';
import { createSpecifyLocation } from '../history/createBrowserHistory.js';



export default function Route(props){ 
    
    return (<routerContext.Consumer>
      { (context)=>{
         return  handleDisplay(context,props);
      } }
    </routerContext.Consumer>)
};






/**
 * 处理展示的组件
 * @param {Object} context 上下文对象
 * @param {Object} props 特性
 */
function handleDisplay(context, props){

   /* 
       children 为最高
       render   次之
       component 为最低级
   */

    // 没匹配到直接结束
    if(!context.match){
        return null;
    };

   const ifon = createSpecifyLocation({newPath: props.path})

   const con = {
    history: context.history,
    location: context.location,
    match: matchPath(ifon.pathname, context.location.pathname, props)
   };


   if(props.children && con.match){
      if(typeof(props.children) === 'function'){
         return props.children(con);
      }else{
         return props.children;
      }
   };

   if(typeof(props.render) === 'function' && con.match){
      return props.render(con);
   };

   if(props.component && con.match){
      return (<props.component {...con}></props.component>);
   };
   
   return null;
};