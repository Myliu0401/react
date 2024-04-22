

import RouterGuard from "./RouterGuard";
import { Route, Switch, NavLink } from 'react-router-dom';

export default function Index(){
    return <RouterGuard isMonitor isBlock processingListening={(targetLocation, currentLocation, action)=>{
      // console.log(targetLocation, currentLocation, action)
    }} blockingMessage={(targetLocation, currentLocation, action)=>{
      //  console.log(targetLocation, currentLocation, action)
    }} handleConfirmation={(ifon,msg)=>{
      // console.log(ifon,msg)
    }}>
         <div style={{
           display:'flex',
           flexDirection:'column',
           height:'100%'
         }}>
           <div>
             <Head></Head>
           </div>
           <div style={{
             width:'100%',
             flexGrow:1
           }}>
             <Switch>
               <Route component={Home} path='/' exact></Route>
               <Route component={Naisi} path='/naisi'></Route>
               <Route component={Nice} path='/nice'></Route>
             </Switch>
           </div>
         </div>
    </RouterGuard>
};


function Home(props){
     return <div style={{
       height:'100%',
       textAlign: 'center',
       backgroundColor:'aliceblue'
     }}>
       <h3>首页</h3>
     </div>
};


function Naisi(props){
  return <div style={{
    height:'100%',
    textAlign: 'center',
    backgroundColor:'antiquewhite'
  }}>
    <h3>naisi</h3>
  </div>
};


function Nice(props){
   return <div style={{
     height:'100%',
     textAlign: 'center',
     backgroundColor: 'beige'
   }}>
     <h3>nice</h3>
   </div>
};

function Head(props){
    return <div style={{
      width:'100%',
      height:70,
      backgroundColor:'#abcdef',
      display:'flex',
      alignItems:'center'
    }}>
      <div>
        <ul>
          <NavLink to='/' exact style={{
            padding:'0px 10px'
          }}>首页</NavLink>
          <NavLink to='/naisi' style={{
            padding:'0px 10px'
          }}>naisi</NavLink>
          <NavLink to='/nice' style={{
            padding:'0px 10px'
          }}>nice</NavLink>
        </ul>
      </div>
    </div>
};