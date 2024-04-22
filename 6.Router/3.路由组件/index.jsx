
function App() {



    return (<ReactRouterDOM.BrowserRouter>
        <ReactRouterDOM.Route path='/' component={Home}></ReactRouterDOM.Route>
        <ReactRouterDOM.Route path='/' component={A}></ReactRouterDOM.Route>
        <ReactRouterDOM.Route path='/' component={B}></ReactRouterDOM.Route>
    </ReactRouterDOM.BrowserRouter>);
};

function Home() {
    return (<h1>首页</h1>);
}

function A() {
    return (<h1>A组件</h1>);
};

function B() {
    return (<h1>B组件</h1>);
};