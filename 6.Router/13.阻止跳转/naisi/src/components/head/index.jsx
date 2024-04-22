import { NavLink } from 'react-router-dom';
import './index.css';




export default function Head() {
    return (<div className='head'>
        <NavLink to='/'>首页</NavLink>
        <NavLink to='/page'>page</NavLink>
    </div>);
};