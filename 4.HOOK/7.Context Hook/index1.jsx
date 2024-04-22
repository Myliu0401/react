//创建上下文对象
const ctx = React.createContext();

function App() {

    return (<ctx.Provider value='nice1'>
        <Test></Test>
    </ctx.Provider>);
};


function Test() {
    return (<ctx.Consumer>
        {(value) => {
            return (<h1>{value}</h1>);
        }}
    </ctx.Consumer>);
};