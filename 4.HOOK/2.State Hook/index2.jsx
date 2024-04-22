
const useState = React.useState

function App() {

    const [data, setData] = useState({
        x: 1,
        y: 2
    });


    return (<div>
        <p>x:{data.x}</p>
        <p>y:{data.y}</p>
        <button onClick={() => {
            setData({
                ...data,
                x: data.x + 1,
            });
        }}>
            x  加1
        </button>

    </div>);
}