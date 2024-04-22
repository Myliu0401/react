

function App(props){
  return (<div>
      <div>
  <ReactRouterDOM.BrowserRouter>
           <ReactRouterDOM.Link to="/A">首页</ReactRouterDOM.Link>
           <ReactRouterDOM.NavLink to="/B">A</ReactRouterDOM.NavLink>
           <WithMyLink to="/">B</WithMyLink>
           <ReactRouterDOM.Link to="/ffa">ffa</ReactRouterDOM.Link>
     <ReactRouterDOM.Switch>
        <ReactRouterDOM.Route path="/" exact>
          <Home></Home>
        </ReactRouterDOM.Route>
        <ReactRouterDOM.Route path="/A">
          <A></A>
        </ReactRouterDOM.Route>
        <ReactRouterDOM.Route path="/B">
          <B></B>
        </ReactRouterDOM.Route>
        <ReactRouterDOM.Route path="/404">
          <No></No>
        </ReactRouterDOM.Route>
        <ReactRouterDOM.Redirect to="/404">
        </ReactRouterDOM.Redirect>
     </ReactRouterDOM.Switch>
  </ReactRouterDOM.BrowserRouter>
      </div>
   </div>)
  
};


function Home(){
   return <div>
     <h3>首页</h3>
   </div>
};


function A(props){
  return <div>
    <h3>A</h3>
  </div>
};


function B(props){
   return <div><h3>B</h3></div>
}; 


function No(props){
  return <div><h3>404</h3></div>
};


function MyLink(props){
     return (<a href={props.to} onClick={(event)=>{
       event.preventDefault();
       console.log(props)
       props.history.push(props.to)
     }}>{ props.children }</a>)
};


const WithMyLink = ReactRouterDOM.withRouter(MyLink);