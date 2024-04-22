



function App() {

    const [n, setN] = useState(0);

    useEffect(() => {
        document.title = `title ${n}`;

    });
    console.log('渲染')
    return (<div>
        <p>title：{n}</p>
        <button onClick={() => {
            setN(n + 1);
        }}>title+1</button>
    </div>);
};