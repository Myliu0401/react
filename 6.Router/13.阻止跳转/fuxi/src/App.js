
import Prompt from './prompt';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

function App() {
  return (<Router basename='/na'>
      <div style={{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
      }}>
        <Prompt isBlock setMessage={(location,action)=>{
             return `即将通过 ${action} 方式，进入 ${location.pathname}`
        }}></Prompt>
        <Head></Head>
        <div style={{
          flexGrow:1,
          width: '100%',
          textAlign: 'center'
        }}>
          <Switch>
            <Route component={Home} path='/' exact></Route>
            <Route component={NBA} path='/nba'></Route>
          </Switch>
        </div>
      </div>
  </Router>);
};



function Head(porps){
    return <div style={{
      width:'100%',
      height:70,
      display:'flex',
      alignItems:'center',
      backgroundColor: 'aliceblue',
    }}>
      <div>
        <ul>
          <NavLink to='/' exact style={{padding:'0px 10px'}}>首页</NavLink>
          <NavLink to='/nba' style={{padding:'0px 10px'}}>NBA</NavLink>
        </ul>
      </div>
    </div>
};


function Home(props){
   return <div style={{
     width:'100%',
     height:'100%',
     backgroundColor:'antiquewhite'
   }}>
     <h3>Home</h3>
   </div>
};


function NBA(props){
  return <div style={{
    width:'100%',
    height:'100%',
    backgroundColor:'beige'
  }}>
    <h3>NBA</h3>
  </div>
};

export default App;
