//import { BrowserRouter, Route, Switch, withRouter, Link, NavLink } from 'react-router-dom';

import BrowserRouter from './react-router-dom/BrowserRouter.jsx';
import Route from './react-router/Route.jsx';
import Switch from './react-router/Switch.jsx';
import withRouter from './react-router/withRouter.jsx';
import Link from './react-router-dom/Link.jsx';
import NavLink from './react-router-dom/NavLink.jsx';


import RouterContext from './react-router/routerContext'

function App() {


  return (
    <BrowserRouter>
      <div>
        <NavLink to='/pppaaa?fdasf=fdsa#as'>/pppaaa</NavLink>
        <NavLink to={{
          pathname:'/dasffdsa',
          search:'a=123&DSAF=321'
        }}>/abcdef</NavLink>
        <NavLink to='/'>321</NavLink>
      </div>
      <Route component={A} path='/pppaaa'></Route>
      <Route component={B} path='/abcdef'></Route>
      <Route component={C} ></Route>

    </BrowserRouter>
  );
};

const N1 = withRouter(NN);
const M1 = withRouter(MM);


function A(props) {
  return (<h1>13124
    <N1></N1>
  </h1>)
};

function B(props) {
  return <h1>B
    <M1></M1>
  </h1>
};

function NN(props) {
  return <div>NN</div>
};

function MM(props) {
  return <h1>MM</h1>
}


function C(props) {
  console.log(props)
  return <div>
    <button onClick={() => {
      props.history.push('/pppaaa')
    }}>A</button>
    <button onClick={() => {
      props.history.push('/abcdef')
    }}>B</button>
  </div>
};


function D(props) {
  return <RouterContext.Consumer>
    {(value) => {
      return <div></div>
    }}
  </RouterContext.Consumer>
}


export default App;
