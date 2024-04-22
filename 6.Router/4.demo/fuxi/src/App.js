import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './pages/admin.jsx';
import Login from './pages/login.jsx';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Admin} path="/"></Route>
        <Route component={Login} path="/login"></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
