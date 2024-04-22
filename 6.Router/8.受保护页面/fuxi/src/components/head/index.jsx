
import { NavLink } from "react-router-dom";
import './index.css';

export default function Head(props){
    return (<div className="head">
      <div className="head_nav">
        <ul className="nav_ul">
          <NavLink to='/' className="ul_item">首页</NavLink>
          <NavLink to='/personalIfon' className='ul_item'>个人信息</NavLink>
          <NavLink to='/add' className='ul_item'>添加</NavLink>
        </ul>
      </div>
      <div className="head_logn">
        <NavLink to='login'>登录</NavLink>
      </div>
    </div>);
};