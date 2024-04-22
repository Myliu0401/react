
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/a/:naisi/:misi' component={A}></Route>
        <Route component={No}></Route>
      </Switch>
    </BrowserRouter>
  );
};


function A(props) {
  console.log(props.match)
 

  return (<div><h1>A组件</h1>
      
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
