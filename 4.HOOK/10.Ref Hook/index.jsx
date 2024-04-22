
function App() {

    const [n, setN] = useState(10);

    const ref = useRef();

    useEffect(() => {
        if (n === 0) {
            return;
        }
        ref.current = setTimeout(() => {
            setN(n - 1);
        }, 1000);

        return () => {
            clearTimeout(ref.current);
        };
    },[n]);


    return (<h1>{n}</h1>);

};