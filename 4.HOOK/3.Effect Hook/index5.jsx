



function App() {

    const [n, setN] = useState(10);

    useEffect(() => {

        window.timer = setInterval(() => {
            setN(n - 1);
            console.log(n)

            //错误的被闭包利用
            if (n === 0) {
                clearInterval(timer);
                return;
            }

        }, 1000);


        return () => {
            clearInterval(timer);
        }
    }, []);

    return (<div>
        <h1>{n}</h1>
        <button onClick={() => {
           // setN(n - 1);
        }}>n-1</button>
    </div>);

};


