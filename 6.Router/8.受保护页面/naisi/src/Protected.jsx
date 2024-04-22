import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import ctx from './cxt.js';


/**
 * 受保护的路由
 * @param {*} param0 
 * @returns 
 */
function ProtectedRoute({ component: Component, children, render, ...remain }) {
    const context = useContext(ctx);

    return <Route {...remain} render={(value) => {

        if (!context.isLogin) {
            return (<Redirect to={{
                pathname: '/login',
                state: value.location.pathname
            }}></Redirect>);
        } else {
            return (<Component></Component>);
        }

    }}></Route>
};



export default ProtectedRoute;