
import { NavLink } from 'react-router-dom';
import './index.css';

export default function Head(props) {
    return (<div className='com-head'>
        <NavLink to='/' exact>首页</NavLink>
        <NavLink to='/news'>新闻中心</NavLink>
        <NavLink to='/nba'>NBA</NavLink>
    </div>);
};