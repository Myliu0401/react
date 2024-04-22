



function App() {
    const [isShow, setIsShow] = useState(false);

    return (<div>
        <ReactTransitionGroup.CSSTransition appear in={isShow} timeout={1000} classNames={{
            appear: 'my-appear',
            appearActive: 'my-active-appear',
            appearDone: 'my-done-appear',
            enter: 'my-enter',
            enterActive: 'my-active-enter',
            enterDone: 'my-done-enter',
            exit: 'my-exit',
            exitActive: 'my-active-exit',
            exitDone: 'my-done-exit',
        }}>
            <h1>CSSTransition</h1>
        </ReactTransitionGroup.CSSTransition>
        <button onClick={() => {
            setIsShow(!isShow);
        }}>

            isShow

        </button>
    </div>);

};