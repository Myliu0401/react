import { routerRedux, NavLink, Route, Switch } from "./dva/router.js";
import Counter from './Counter.jsx';


export default function routerConfig(props){
      return (<routerRedux.ConnectedRouter  history={props.history}>
        <div>
          <div>
           <NavLink to="/" exact>首页</NavLink>
           <NavLink to="/connect" exact>connect</NavLink>
        </div>
        <div>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/connect" component={Counter}></Route>
          </Switch>
        </div>
        </div>
      </routerRedux.ConnectedRouter>);
};



function Home(){
  return (<div>

      <h1>首页</h1>

  </div>);
};