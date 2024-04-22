

function App1(props){
  return <ReactRouterDOM.BrowserRouter>
     <ReactRouterDOM.Switch>
       <ReactRouterDOM.Route path="/">
         <Home></Home>
       </ReactRouterDOM.Route>
       <ReactRouterDOM.Route path="/a">
         <A></A>
       </ReactRouterDOM.Route>
       <ReactRouterDOM.Route path="/b">
         <B></B>
       </ReactRouterDOM.Route>
     </ReactRouterDOM.Switch>
   </ReactRouterDOM.BrowserRouter>
};


function Home(props){
  return <h3>Home</h3>
};


function A(props){
  return <h3>A</h3>
}

function B(props){
  return <h3>B</h3>
}