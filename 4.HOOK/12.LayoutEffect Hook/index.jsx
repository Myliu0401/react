



function App() {

    const ref = useRef();

    const [n, setN] = useState(0);

    /* useEffect(() => {
          ref.current.innerText = Math.random();
    }); */
    useLayoutEffect(() => {
        ref.current.innerText = Math.random();
    });


    return (<div>
        <h1 ref={ref}>{n}</h1>
        <button onClick={() => {
            setN(n + 1);
        }}>click</button>
    </div>);

}; 