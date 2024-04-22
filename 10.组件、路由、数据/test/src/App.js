
//import CounterContainer from './components/cotnuer.jsx';
//import { Provider } from 'react-redux';
import reactRedux from './react-redux/index.js';
import { store } from './store/index.js';
//import Paging from './components/paging/index.jsx';
//import StudentSearch from './components/studentSearch.jsx';
import React from 'react'
//import { ConnectedRouter } from 'connected-react-router'
import  connectedReactRouter  from './connected-react-router/index.js'
import A from './pages/a/index.jsx'
import history from './store/history.js';


/* function App() {
  return (<CounterContainer></CounterContainer>)
} */

/* function App(){
  return <Provider store={store}>
    <CounterContainer></CounterContainer>
  </Provider>
}; */

/* function App(){
  return (<Provider store={store}>
  <StudentSearch></StudentSearch>
</Provider>)
} */

/* function App(){
   return (<reactRedux.Provider store={store}>
      <StudentSearch></StudentSearch>
   </reactRedux.Provider>);
}; */

/* function App(){
  return (<A></A>)
} */

/* class A extends React.Component{
  constructor(props){
     super(props)
     this.state = {

     }
  }
  componentDidMount(){
  }
  render(){
    console.log('==')
    return <div>123</div>
  }
} */

/* function App(){
   return <Provider store={store}>
          <ConnectedRouter history={history}>
               <A></A>
          </ConnectedRouter>
   </Provider>
} */


function App(){
  return (<reactRedux.Provider store={store}>
       <connectedReactRouter.ConnectedRouter history={history}>
           <A></A>
       </connectedReactRouter.ConnectedRouter>
  </reactRedux.Provider>);
};

export default App;


