import { NavLink } from 'react-router-dom';
import './index.css';
export default function MyNav() {
    return (<div className='nav'>
        <NavLink to='/page1'>page1</NavLink>
        <NavLink to='/page2'>page2</NavLink>
    </div>);
};