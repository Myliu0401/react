import Home from './pages/home.jsx';
import Journalism from './pages/Journalism.jsx';
import Xiniwen1 from './pages/xinwen1.jsx';
import Xiniwen2 from './pages/xinwen2.jsx';
import Xiniwen3 from './pages/xinwen3.jsx';

const routerIfons = [{
  path: '/',

  component: Home,

  exact: true,

  name: 'home'
}, {
  path: '/Journalism',

  component: Journalism,

  exact: false,

  name: 'journalism',

  children: [{
      path: '/',
      component: Xiniwen1,
      exact: true,
      name: 'xiniwen1'
  }, {
      path: "/xinwen2",
      component: Xiniwen2,
      exact: true,
      name: 'xinwen2'
  }, {
      path: '/xinwen3',
      component: Xiniwen3,
      exact: true,
      name: 'xinwen3'
  }]
}];


//vue形式的路由配置文件
export default routerIfons;