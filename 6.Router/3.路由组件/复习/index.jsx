

function App(props){
   return <ReactRouterDOM.BrowserRouter>
      <ReactRouterDOM.Route component={Home} path="/"></ReactRouterDOM.Route>
      <ReactRouterDOM.Route component={A} path="/a"></ReactRouterDOM.Route>
      <ReactRouterDOM.Route component={B}></ReactRouterDOM.Route>
    </ReactRouterDOM.BrowserRouter>
};



function Home(props){
   return <div><h3>首页</h3></div>
};

function A(props){
   return <div><h3>A</h3></div>
};

function B(props){
   return <div><h3>B</h3></div>
};

