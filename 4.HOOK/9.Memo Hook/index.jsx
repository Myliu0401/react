

function Iterm(props) {

    console.log(props.index);

    return (<li key={props.index}>{props.index}</li>);
};



function Test() {

    const [obj, setObj] = useState({ min: 1, max: 10000 });
    const [n, setN] = useState(1);
 
    const data = useMemo(() => {

        const arr = [];

        for (let i = obj.min; i <= obj.max; i++) {
            arr.push(<Iterm index={i}></Iterm>);
        };

        return arr;


    }, [obj.min, obj.max]);


    return (<div>
        <ul>{data}</ul>
        <input value={n} type='number' onChange={(e) => {
            setN(e.target.value);
        }} />
    </div>)

};