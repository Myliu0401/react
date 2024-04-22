



function MyCssTransition(props) {
    return <ReactTransitionGroup.CSSTransition  {...props} classNames={{
        appear: 'animate__backInDown',
        /* appearActive: '', */
        appearDone: '',
        enter: 'animate__backInDown',
        /* enterActive: '',
        enterDone: '', */
        
        exitActive: 'animate__backOutLeft',
        exitDone: 'exitDone',
    }}>
        {props.children}
    </ReactTransitionGroup.CSSTransition>
};


function Comp1() {
    return (<h1 className='animate__animated'>CSSTransition 1</h1>); /* backInDown */
};


function Comp2() {
    return (<h1 className='animate__animated'>CSSTransition 2</h1>); /* backInUp */
};

function App() {

    const [isShow, setIsShow] = useState(true);

    return <div>
        <div className='my' >
            <MyCssTransition appear mountOnEnter in={isShow} timeout={1000}>
                <Comp1></Comp1>
            </MyCssTransition>

            <MyCssTransition appear mountOnEnter in={!isShow} timeout={1000}>
                <Comp2></Comp2>
            </MyCssTransition>
        </div>
        <button onClick={() => {
            setIsShow(!isShow);
        }}>走起</button>
    </div>

};