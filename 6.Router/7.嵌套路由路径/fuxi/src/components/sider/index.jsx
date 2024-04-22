import router from '../../routerConfig.js';
import { NavLink,Link } from 'react-router-dom';
import './index.css';
console.log(router.user.root)
export default function Sider(props){
  return (<div className="sider">
       <ul className='sider_ul'>
         <NavLink to="/">首页</NavLink>
         <NavLink to={'/user'}>用户</NavLink>
       </ul>
  </div>);
}