
import RouterGuard from './RouterGuard.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Head from './components/head.jsx';
import Home from './pages/home.jsx';
import Naisi1 from './pages/naisi1.jsx';
import Nice from './pages/nice.jsx';

function App() {
  return (
    <RouterGuard isMonitor onChange={(frontLocation, afterLocation, action, cancelListening) => {
      // console.log(frontLocation, afterLocation, action, cancelListening)
    }} isBlock handleConfirm={(frontLocation, afterLocation, action, msg, commit) => {
      commit(true);
    }} blockNews='秘书秘书'>
      <Head></Head>
      <Switch>
        <Route path='/naisi1' component={Naisi1}></Route>
        <Route path='/nice' component={Nice}></Route>
        <Route path='/' component={Home}></Route>
      </Switch>
    </RouterGuard>
  );
}

export default App;
