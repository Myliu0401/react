


function MyCssTransition(props) {
    
    return (<ReactTransitionGroup.CSSTransition appear mountOnEnter in={props.in} timeout={props.duration}><h1> CSSTransition {props.text} </h1></ReactTransitionGroup.CSSTransition>);
};


function App() {

    const [isShow, setIsShow] = useState(false);

    return (<div>
        <div className="my">
            <MyCssTransition  in={isShow} text={1}   duration={1000}></MyCssTransition>
            <MyCssTransition  in={!isShow} text={2}   duration={1000}></MyCssTransition>
        </div>
        <button onClick={() => {
            setIsShow(!isShow);
        }}>走起</button>
    </div>);
}



/* function Comp1({ visible }) {
    return <ReactTransitionGroup.CSSTransition appear mountOnEnter in={visible} timeout={5000}>
        <h1 className="title">组件1</h1>
    </ReactTransitionGroup.CSSTransition>
}

function Comp2({ visible }) {
    return <ReactTransitionGroup.CSSTransition mountOnEnter in={visible} timeout={5000}>
        <h1 className="title">组件2</h1>
    </ReactTransitionGroup.CSSTransition>
}

 function App() {
    const [showComp1, setShowComp1] = useState(true)
    return (
        <div className="container">
            <div className="comp-container">
                <Comp1 visible={showComp1} />
                <Comp2 visible={!showComp1} />
            </div>
            <button onClick={() => setShowComp1(!showComp1)}>切换显示状态</button>
        </div>
    )
} */