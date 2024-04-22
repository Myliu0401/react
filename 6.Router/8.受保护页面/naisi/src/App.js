import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import Head from './component/head.jsx';
import Home from './pages/home.jsx';
import Public from './pages/public.jsx';
import Login from './pages/login.jsx';
import Ifon from './pages/ifon.jsx';
import cxt from './cxt.js';
import ProtectedRoute from './Protected.jsx';
import { useState } from 'react';


function App() {

  const [context, useObj] = useState({
    isLogin: false
  });

  return (
    <Router>
      <cxt.Provider value={{
        isLogin: context.isLogin, 
        SetIS() {
          const is = !context.isLogin
          useObj({
            isLogin: is
          });
          return is;
        }
      }} >
        <Head></Head>
        <Switch>
          <Route path='/public' component={Public}></Route>
          <Route path='/login' component={Login}></Route>
          <ProtectedRoute path='/personalIfon' component={Ifon}></ProtectedRoute>
          <Route path='/' component={Home}></Route>
        </Switch>
      </cxt.Provider>
    </Router>
  );
}

export default App;
