
window.arr = [];

function App() {
    const [n, setN] = useState();
    const ref = useRef();

    arr.push(ref);
    console.log('==')


    return (<div>
        <div>
            <input ref={ref} type='text' />
        <button onClick={() => {
            console.log(ref.current.value);
        }}>得到input的值</button>
        </div>
        
        <input type='number' onChange={(e) => {
            setN(e.target.value);
        }}  />
    </div>);
}