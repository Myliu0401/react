
function App() {


    const [isTrue, setIsTrue] = useState(true);


    return <div>
        <ReactTransitionGroup.SwitchTransition>
            <ReactTransitionGroup.CSSTransition appear timeout={2000} classNames={{
                appearActive: 'animate__swing',
                exitActive: 'animate__jello',
                enterActive: 'animate__swing',
            }} key={isTrue}>
                <h1 className='animate__animated'>SwitchTransition {isTrue ? '-True' : '-False'}</h1>
            </ReactTransitionGroup.CSSTransition>
        </ReactTransitionGroup.SwitchTransition>
        <button onClick={() => {
            setIsTrue(!isTrue);
        }}>
            isTrue
        </button>
    </div>
}