import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './pages/admin.jsx';
import Login from './pages/login.jsx';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path='/login' component={Login}></Route>
          <Route path='/' component={Admin}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
