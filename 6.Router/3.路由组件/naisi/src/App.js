import { BrowserRouter, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home}></Route>
      <Route path='/A' exact component={A}></Route>
      <Route path='/B' exact component={B}></Route>
      <Route component={C}></Route>
    </BrowserRouter>
  );
};


function Home() {
  return (<h1>首页</h1>);
};

function A() {
  return (<h1>A组件</h1>);
};

function B() {
  return (<h1>B组件</h1>);
};


function C() {
  return (<h1>404</h1>);
}

export default App;
