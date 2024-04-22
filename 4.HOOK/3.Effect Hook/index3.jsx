




function App() {
    const [isP, setIsP] = useState(true);
    return (<div>{isP && <Test></Test>}
        <button onClick={() => {
            setIsP(!isP);
        }}>显示/隐藏</button>
    </div>);
};



function Test(props) {

    useEffect(() => {
        console.log('副作用函数');
        return () => {
            console.log('清理函数');
        }
    }, []); //使用空数组作为依赖项，则副作用函数仅在挂载时运行，表示不依赖任何东西，相当于什么都没变
    console.log('函数组件')
    const [, refresh] = useState({});

    return (<div>
        <h1>Test</h1>
        <button onClick={() => {
            refresh({}); //利用该特性进行强制刷新组件
        }}>刷新组件</button>
    </div>);
};