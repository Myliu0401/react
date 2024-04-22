import matchPath from "./mathchPath.js";
import routerContext from './routerContext.js';
import Route from './Route.jsx';
import Redirect from '../react-router-dom/Redirect.jsx';
import { createSpecifyLocation } from '../history/createBrowserHistory.js';

export default function Switch(props){
    return (<routerContext.Consumer>
      { (context)=>{
            return handleChildren(context, props);
      } }
    </routerContext.Consumer>);
};


/**
 * 处理子组件数组项
 * @param {*} context 
 * @param {*} props 
 */
function handleChildren(context,props){
     let children = [];

     if(!props.children){
         return null
     };

     
     if(Array.isArray(props.children)){
         children = props.children;
     }else{
         children = [props.children]
     };

     for(let item of children){
          if(item.type === Route || item.type === Redirect){

             const ifon = createSpecifyLocation({ newPath: item.props.path }, context.history.basename);
             
             const macth = matchPath(ifon.pathname, context.location.pathname, item.props);
             
             if(item.type === Redirect || macth){
                 return item;
             }
          }else{
            throw new Error('组件必须是 Route 或 Redirect  组件')
          }
     };

    return null;
};