
import RouterContext from '../react-router/routerContext.js';
import { splicingPath } from '../history/createBrowserHistory.js';
import React from 'react';

export default function Link(props){

   return (<RouterContext.Consumer>
     { (context)=>{
         return handleCompJump(context, props)
     } }
   </RouterContext.Consumer>); 

};


/**
 * 处理组件跳转
 * @param {Object} context  上下文对象 
 * @param {Object} props  特性
 */
function handleCompJump(context, props){
      const { to = '/', innerRef = {current:null}, tag = 'a', ...surplus } = props;

      let path;
      
      if(typeof(to) === 'object'){
         const newPath = splicingPath(to);
          path = {
            ...to,
            pathname: newPath
          }
         
      };

      if(typeof(to) === 'string'){
         path = {
           pathname: to
         }
      };

      const options = {
        ref: innerRef,
        ...surplus,
        href: path.pathname,
        onClick(event){
         event.preventDefault();
         props.replace ? context.history.replace(path.pathname, path.state) : context.history.push(path.pathname, path.state);
       },
      };

      tag !== 'a' && delete options.href;

      return React.createElement(tag, options, props.children);

      
};