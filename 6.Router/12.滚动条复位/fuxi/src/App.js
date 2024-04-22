import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import withScroll from "./withScroll";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";

const ResetScroll1 = withScroll(Page1);
const ResetScroll2 = withScroll(Page2);

function App() {
  return (<Router>
    <Head></Head>
    <div style={{
      width:600,
      height:'100%',
      position:'relative',
      left:'50%',
      transform: 'translateX(-50%)'
    }}>
       <Switch>
         <Route component={ResetScroll1} path='/' exact></Route>
         <Route component={ResetScroll2} path='/page2'></Route>
       </Switch>
    </div>
  </Router>);
};



function Head(props){
    return <div style={{
      width: 200,
      height: 100,
      position: 'fixed',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      border: '1px solid black',
      backgroundColor: 'aliceblue',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around'
    }}>
      <NavLink to='/' exact>page1</NavLink>
      <NavLink to='/page2'>page2</NavLink>
    </div>
};

export default App;
