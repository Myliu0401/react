import Home from "./pages/home";
import Journalism from "./pages/journalism";
import Xinwen1 from "./pages/xinwen1";
import Xinwen2 from "./pages/xinwen2";
import Xinwen3 from "./pages/xinwen3";


const router = [{
  path: '/',
  name: 'home',
  component: Home,
  exact: true,

}, {
  path: '/journalism',
  name: 'journalism',
  component: Journalism,
  exact: false,

  children: [{
    path: '/',
    name: 'xinwen1',
    component: Xinwen1,
    exact: true
  }, {
    path: '/xinwen2',
    component: Xinwen2,
    name: 'xinwen2',
    exact: true
  }, {
    path: '/xinwen3',
    component: Xinwen3,
    name: 'xinwen3',
    exact: true
  }]
}];


export default router;