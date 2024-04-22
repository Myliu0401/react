


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


/**
 * 往数组里多添加一项
 * @param {*} data   数组
 * @param {*} setData  函数
 */
function addData(data, setData) {
    setData([...data, { id: data.length + 1, text: `text${data.length + 1}` }]);
};

/**
 * 根据数组生成  react元素数组
 * @param {*} data  数组
 * @param {*} setData 函数
 */
function generate(data, setData) {

    return data.map((it, index) => {
        return (<ReactTransitionGroup.Transition key={it.id} timeout={5000}>
            {(state) => {
                console.log(state, it.id)
                return <li className={state}><button onClick={() => {
                    setData(data.filter((myIt, myIndex) => {
                        return it.id !== myIt.id
                    }));
                }}>删除</button>  {it.text}</li>
            }}
        </ReactTransitionGroup.Transition>);
    });
};