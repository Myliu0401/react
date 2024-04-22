
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/a/:year(\d+)/:month(\d+)/:day(\d+)/*" exact component={A} />
        <Route component={No} />
      </Switch>
    </BrowserRouter>
  );
};


function A(props) {
  console.log(props.match);
  return (<div><h1>A组件</h1>
    <p>显示：{props.match.params.year}年-{props.match.params.month}月-{props.match.params.day}-日</p>
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
