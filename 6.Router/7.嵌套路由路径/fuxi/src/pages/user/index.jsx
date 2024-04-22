import { Switch, Route , NavLink } from "react-router-dom"

import router from '../../routerConfig.js'

export default function User(props){
   return (<div className="user">
     <ul className="user_ul">
        <NavLink to={router.user.root}>user</NavLink>
        <NavLink to={router.user.add}>add</NavLink>
        <NavLink to={router.user.delete}>delete</NavLink>
     </ul>
     <div>
        <Switch>
          <Route path={router.user.root} exact><A></A></Route>
          <Route path={router.user.add} exact><B></B></Route>
          <Route path={router.user.delete} exact><C></C></Route>
        </Switch>
     </div>
   </div>)
};


function A(){
  return (<div>
    <h3>user</h3>
  </div>)
};


function B(){
  return (<div>
    <h3>add</h3>
  </div>)
};


function C(){
  return (<div>
    <h3>delete</h3>
  </div>)
}