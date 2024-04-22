

import router from './routerConfin.js';
import { Route, Switch } from 'react-router-dom';




export default function RootRouter(props){
     return <>
        { routerRecursion(router,'/') }
     </>
};



function routerRecursion(router, path){
   if(!Array.isArray(router)){
     return null
   };

   const s = router.map((item,index)=>{

       const { children = null, to, component:Component, exact, ...surplus } = item;

       let newPath = path + item.path;
       newPath = newPath.replace(/\/\//g,'/');
  
       return (<Route key={index} exact={exact} {...surplus} path={newPath} render={(props)=>{
           return (<Component {...props} {...surplus}>
             { routerRecursion(children, newPath) }
           </Component>);
       }}>
       </Route>);
   });

   return (<Switch>{s}</Switch>);
};