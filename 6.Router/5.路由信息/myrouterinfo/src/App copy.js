
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/a' component={A}></Route>
        <Route component={No}></Route>
      </Switch>
    </BrowserRouter>
  );
};


function A(props) {
  console.log(props.location)
  const query = props.location.search;
  const pathName = props.location.pathname;
  const hash = props.location.hash;

  return (<div><h1>A组件</h1>
    <div><h1>pathName : {pathName}</h1></div>
    <div><h1>query : {query}</h1></div>
    <div><h1>hash : {hash}</h1></div>
  </div>);
};


function No(props) {
  return (<div>
    <h1>找不到页面</h1>
    <button onClick={() => {
      props.history.push('/a');
    }}>走！去a</button>
  </div>);
};



export default App;
