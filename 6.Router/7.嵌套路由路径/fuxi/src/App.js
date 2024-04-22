import Head from './components/head/index.jsx';
import Sider from './components/sider/index.jsx';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import router from './routerConfig.js';
import User from './pages/user/index.jsx';
window.router = router
function App() {
  return (<div className='test'>
  <Head></Head>
  <div className='test_main'>
     <Router>
       <Sider></Sider>
       <main className='main_main'>
         <Switch>
            <Route path='/' exact={true} component={Home}></Route>
            <Route path={router.user.root} component={User}></Route>
         </Switch>
       </main>
     </Router>
  </div>
</div> );
};


function Home(props){

   return (<div>
     <h3>首页</h3>
   </div>)
}

export default App;
