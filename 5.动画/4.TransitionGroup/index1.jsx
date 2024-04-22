


function App() {


    const [data, setData] = useState([{
        id: 1,
        text: 'text1',
    }, {
        id: 2,
        text: 'text2'
    }]);


    return (<div>
        <ReactTransitionGroup.TransitionGroup component='ul'>
            {generate(data, setData)}
        </ReactTransitionGroup.TransitionGroup>
        <button onClick={() => {
            addData(data, setData);
        }}>添加</button>
    </div>);

};


function generate(data, setData) {

    return data.map((it, index) => {
        return (
            <ReactTransitionGroup.CSSTransition key={it.id} timeout={2000}>
                <li><button onClick={() => {
                    setData(deleteData(it.id, data));
                }}>删除</button><span>{it.text}</span></li>
            </ReactTransitionGroup.CSSTransition>
        );
    });

};


function addData(data, setData) {
    setData([...data, { id: data.length + 1, text: `text${data.length + 1}` }]);
};


function deleteData(id, data) {
    return data.filter((int, index) => {
        return int.id !== id
    });
};

