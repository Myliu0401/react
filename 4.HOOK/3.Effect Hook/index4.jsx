





function App() {

    const [n, setN] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            console.log(n)
        },500);
    });

    return (<div>
        <h1>{n}</h1>
        <button onClick={() => {
            setN(n + 1)
        }}>加1</button>
    </div>);
};