
import NavLink from '../../router/react-router-dom/NavLink.jsx';
import Route from '../../router/react-router/Route.jsx';
import Switch from '../../router/react-router/Switch.jsx';
import StudentSearch from '../../components/studentSearch';
import './index.css';

export default function A(props){
 
     return <div className='box'>
        <Top></Top>
        <div className='box1'>
          <Nav></Nav>
          <Switch>
             <Route component={C} path="/student" exact={true}></Route>
             <Route component={B} path="/" exact={true}></Route>
          </Switch>
        </div>
     </div>
}


function Top(props){
   return <div className='top'></div>
}

function Nav(props){
     return <div className='nav'>
          <NavLink to="/">首页</NavLink>
          <NavLink to="/student">学生·</NavLink>
     </div>
}


function B(){
  return <div><h1>这是首页</h1></div> 
}


function C(){
  return <div>
        <StudentSearch></StudentSearch>
  </div>
}