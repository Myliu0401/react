
let n = 1;


function App() {

    const [, refresh] = useState({});

    useEffect(n % 2 === 1 ? func1 : func2);

    n++;


    return (<div><button onClick={() => {
        refresh({});
    }}>强制刷新</button></div>);
};



function func1() {
    console.log('odd 副作用函数');
    return () => {
        console.log('odd 清理函数')
    };
};


function func2() {
    console.log('even 副作用函数');
    return () => {
        console.log('even 清理函数')
    };
};