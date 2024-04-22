import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect, withRouter } from 'react-router-dom';
import MyLink from './Link.js';
import './app.css';

function App() {
  return (
    <Router>
      <Ifon></Ifon>
      <Switch>
        <Route path='/' component={A} exact></Route>
        <Route path='/b' component={B}></Route>
        <Route path='/b/c' component={C}></Route>
        <Route path='/Redirect' component={MyRedirect}></Route>
        <Redirect to='/Redirect'></Redirect>
      </Switch>
    </Router>
  );
};



function Ifon() {
  return (<div>
    {/* <a href='/a'>去a</a>
    <a href='/b'>去b</a> */}
    {/* <Link to='/a'>去a</Link>
    <Link to='/b'>去b</Link> */}
    <NavLink to='/a'>去a</NavLink>
    <NavLink to='/b'>去b</NavLink>
  </div>);
};



function A(props) {
  console.log(props)
  return (<h1>A组件</h1>);
};

function B(props) {
  console.log(props)
  return (<h1>B组件
    <Route component={C} path='/b/c'></Route>
  </h1>);
};

function C(props){
  console.log(props)
  return <div>514</div>
}


function MyRedirect() {
  return (<h1>MyRedirect</h1>);
};



export default App;
