

let mvBox = React.createRef();
window.timer = null;

let textX = React.createRef();
let textY = React.createRef();



function App() {

    const [biao, setBiao] = useState({
        x: '',
        y: ''
    });

    const [isP, setIsP] = useState(true);


    return (<div>{
        isP && <div style={{
            position: 'relative',
            top: 200
        }}>
            <label>x:<input name="X" ref={textX} /></label>
            <label>y:<input name="Y" ref={textY} /></label>
            <button onClick={() => {
                setBiao({
                    x: textX.current.value,
                    y: textY.current.value
                });
            }}>启航</button>

            <MovedBlock left={biao.x} top={biao.y}></MovedBlock>
        </div>}
        <button onClick={() => {
            setIsP(!isP);
        }} style={{
            marginTop: 200
        }}>显示/隐藏</button>
    </div>);
};


/**
 * 函数组件   一个可移动的方块
 * @param {*} props  属性对象
 */
function MovedBlock(props) {


    //副作用
    useEffect(() => {

        timerRedundancy();
        let num = 0; //当前执行的次数

        const totalTimes = Math.ceil(props.second / 16); //执行的总次数

        //每次计时器执行需要添加的值
        const dix = props.left / totalTimes;
        const diy = props.top / totalTimes;

        mvBox.current.style['left'] = 0 + 'px';
        mvBox.current.style['top'] = 0 + 'px';

        //dom信息
        const info = getComputedStyle(mvBox.current);
        let leftValue = parseFloat(info.left);  //当前的left值
        let topValue = parseFloat(info.top);    //当前的top值
        timer = setInterval(() => {

            num++;
            leftValue += dix;
            topValue += diy;

            if (num === totalTimes) {
                leftValue = props.left;  //最终值
                topValue = props.top;    //最终值
                timerRedundancy();
            };

            mvBox.current.style['left'] = leftValue + 'px';
            mvBox.current.style['top'] = topValue + 'px';

        }, 16);


        return timerRedundancy;
    }, [props.left, props.top]);



    return (<div ref={mvBox} data-index={'1'} style={{
        width: 100,
        height: 100,
        position: 'fixed',
        left: 0,
        top: 0,
        backgroundColor: `rgb(${Math.ceil(Math.random() * 50 + (200 - 100))},${Math.ceil(Math.random() * 50 + (200 - 100))},${Math.ceil(Math.random() * 50 + (200 - 100))})`
    }}>

    </div>);
};



//默认属性值
MovedBlock.defaultProps = {
    left: 0,
    top: 0,
    second: 1000, //默认为 1000毫秒
};

//属性类型检查
MovedBlock.propTypes = {
    left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    second: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};


function timerRedundancy() {
    console.log('清理函数');
    clearInterval(timer);
    timer = null;
};