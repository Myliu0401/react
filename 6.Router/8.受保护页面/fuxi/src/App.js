import context from './cxt.js';
import { BrowserRouter as Router, Switch ,Route, NavLink } from 'react-router-dom';
import Head from './components/head/index.jsx';
import { useState,useContext } from 'react';
import ProtectedRoute from './Protected.jsx';


function App() {

  const [ifon,setIfon] = useState({
    isLogIn:false
  })

  return (
    <div className="App" style={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}}>
        <Router>
          <context.Provider value={{
             isLogIn:ifon.isLogIn,
             setIsLogIn(){
               setIfon({
                 ...ifon,
                 isLogIn:!ifon.isLogIn
               });
               return !ifon.isLogIn
             }
          }}>
            <Head></Head>
            <main style={{width:'100%',flexGrow:1,textAlign: 'center'}}>
              <Switch>
                <Route path='/' exact><Home></Home></Route>
                <Route path='/add'><Add></Add></Route>
                <ProtectedRoute path='/personalIfon' component={PersonalIfon}></ProtectedRoute>
                <Route path='/login' component={Logon}></Route>
              </Switch>
            </main>
          </context.Provider>
        </Router>
    </div>
  );
};


function Home(props){
  return (<div style={{
    width:'100%',
    height:'100%',
    backgroundColor:'aliceblue'
  }}>
    <h3>首页</h3>
  </div>)
};


function Add(props){
  return (<div style={{
    width:'100%',
    height:'100%',
    backgroundColor: 'antiquewhite'
  }}>
    <h3>add</h3>
  </div>)
};

function PersonalIfon(props){
   return (<div style={{
    width:'100%',
    height:'100%'
  }}>
    <div>
      <h3>================= 个人信息 ================</h3>
    </div>
  </div>)
};


function Logon(props){
  const context1 = useContext(context);
  return (<div style={{
    width:'100%',
    height:'100%',
    backgroundColor:'burlywood'
  }}>
    <h3>登录页</h3>
    <div>
       <button onClick={()=>{
          if(context1.setIsLogIn()){
             props.location.state ? props.history.push(props.location.state)  : props.history.push('/') ;  
          }else {
             props.history.push('/')
          }
       }}>{ context1.isLogIn ? '退出登录' : '登录' }</button>
    </div>
  </div>);
}

export default App;
