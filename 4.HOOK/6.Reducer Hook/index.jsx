


function App() {

    const [n, dispatch] = useReducer(reducer, 1);

    return (<div>
        <button onClick={() => {
            dispatch({
                type: 'reduce'
            });
        }}>-</button><span>{n}</span><button onClick={() => {
            dispatch({
                type: 'increase'
            });
        }}>+</button>
    </div>);

};


/**
 * 该函数将进行修改数据
 * @param {*} state  数据
 * @param {*} action 描述对象
 */
function reducer(state, action) {
    switch (action.type) {
        case 'reduce':
            if (state === 0) {
                return state;
            }
            return state - 1;
        case 'increase':
            if (state === 10) {
                return state;
            }
            return state + 1;
        default:
            return state;
    };
};


/**
 * 
 * @param {*} reducer   修改数据的函数
 * @param {*} initData     初始数据
 * @param {*} func      回调函数  返回值将作为初始数据   可传可不传
 */
function useReducer(reducer, initData, func) {

    const [n, setN] = useState(typeof (func) === 'function' ? func(initData) : initData);

    function dispatch(action) {
        const newN = reducer(n, action);
        setN(newN);
        return newN;
    };

    return [n, dispatch];

};



/* 

   该useReducer函数将是将组件函数中下面这些修改数据的代码抽离出来
   const [n, setN] = useState(5);
    function dispatch(action) {
        const newN = reducer(n, action);
        setN(newN);
        return newN;
    };

*/


