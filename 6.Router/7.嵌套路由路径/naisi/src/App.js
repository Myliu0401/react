import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Head from './components/head.jsx';
import User from './pages/user.jsx';
import routerObj from './routerConfig.js';
console.log(routerObj)
function App() {
  return (
    <Router>
      <Head></Head>
      <Switch>
        <Route /* path='/u' */ path={routerObj.user.root} component={User}></Route>
      </Switch>
    </Router>
  );
};

export default App;
