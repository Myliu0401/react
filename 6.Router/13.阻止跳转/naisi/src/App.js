import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Head from './components/head/index.jsx';
import My from './pages/my/index.jsx';
import Home from './pages/home/index.jsx';
import Prompt from './Prompt.jsx';

function App() {
  return (
    <Router getUserConfirmation={(msg,callback)=>{
           callback(window.confirm(msg));
    }} basename='/nn'>
      <Prompt isTips tipsMsg='321'></Prompt>
      <Head></Head>
      <Switch>
        <Route path='/' component={Home} exact></Route>
        <Route path='/page' component={My}></Route>
      </Switch>
    </Router>
  );
}

export default App;
