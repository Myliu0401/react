



function App1(props){

     return (<ReactRouterDOM.BrowserRouter>
       <ReactRouterDOM.Switch>
         <ReactRouterDOM.Route component={Home} path="/6.Router/5.路由信息/fuxi/index.html" exact></ReactRouterDOM.Route>
         <ReactRouterDOM.Route component={A1} path="/6.Router/5.路由信息/fuxi/index.html/a"></ReactRouterDOM.Route>
         <ReactRouterDOM.Route component={B1} path="/6.Router/5.路由信息/fuxi/index.html/b"></ReactRouterDOM.Route>
       </ReactRouterDOM.Switch>
     </ReactRouterDOM.BrowserRouter>);
};

function Home(props){

    return (<div>
      <h3>这是首页</h3>
      <button onClick={()=>{
           props.history.push('/6.Router/5.路由信息/fuxi/index.html/a?v=123#1234','你好')
      }}>去A组件</button>
    </div>)
};



function A1(props){
   console.log(props)
    return <div>
      <h3>这是A组件</h3>
      <button onClick={()=>{
            props.history.push('/6.Router/5.路由信息/fuxi/index.html/b')
          }}>走起B组件</button>
    </div>
};


function B1(props){
   return <div>
     <h3>这是B组件</h3>
     <button onClick={()=>{
       props.history.push('/6.Router/5.路由信息/fuxi/index.html/a')
     }}>回到A组件</button>
   </div>
};
