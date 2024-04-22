
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/a' component={A}></Route>
        <Route path='/b' component={B}></Route>
        <Route component={No}></Route>
      </Switch>
    </BrowserRouter>
  );
};


function A(props) {
  return (<div>
    <h1>A组件</h1>
    <button onClick={() => {
      props.history.push('/b', '状态数据');
    }}>跳到B组件</button>
  </div>);
};


function B(props) {
  return (<div>
    <h1>B组件</h1>
    <p>{props.history.location.state}</p>
    <button onClick={() => {
      props.history.push('/a');
    }}>跳到A组件</button>
  </div>);
};


function No(props) {
  return (<div><h1>找不到页面</h1><button onClick={() => {
    props.history.push('/a');
  }}>走！去a</button></div>);
}



export default App;
