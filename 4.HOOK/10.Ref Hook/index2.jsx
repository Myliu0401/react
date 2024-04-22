


function App() {

    const [n, setN] = useState(10);
    const ref = useRef(n);

    useEffect(() => {


        const timer = setInterval(() => {
            setN(--ref.current);
            if (ref.current === 0) {
                clearInterval(timer);
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
        
    }, []);


    return (<h1>{n}</h1>)

}