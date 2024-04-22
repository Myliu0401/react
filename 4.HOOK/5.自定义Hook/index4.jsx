
function Test1(){
    useTimer(() => {
        console.log('Test');
    }, 1000);
    return <h1>Test</h1>
}


function Test() {
    const [isP, setIsP] = useState(true);

    return (<div>{isP &&
        <Test1/>}
        <button onClick={() => {
            setIsP(!isP);
        }}>显示/隐藏</button>
    </div>);
};