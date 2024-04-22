import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import ctx from './cxt.js';


/**
 * 受保护的路由
 * @param {*} param0 
 * @returns 
 */
function ProtectedRoute({ component: Component, children = null, render, ...remain }) {
     const context = useContext(ctx);
      
     return (<Route {...remain} render={(props)=>{
        if(context.isLogIn){
          return <Component></Component>
        }else {
         return <Redirect to={{
            pathname: '/login',
            state: props.location.pathname
          }}></Redirect>
        }
     }}>
       { children }
     </Route>)
};



export default ProtectedRoute;