
const useState = React.useState;


function App() {

    //进行解构
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    console.log(setA == setB)

    return (<div>

        <div>
            <button onClick={() => {
                setA(a - 1);
            }}>-</button>
            <span>{a}</span>
            <button onClick={() => {
                setA(a + 1)
            }}>+</button>
        </div>
        <p>=========一条性感的分界线=========</p>
        <div>
            <button onClick={() => {
                setB(b - 1)
            }}>-</button>
            <span>{b}</span>
            <button onClick={() => {
                setB(b + 1)
            }}>+</button>
        </div>
    </div>);
};