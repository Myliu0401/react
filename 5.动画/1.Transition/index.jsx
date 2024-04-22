


const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

const Fade = (state) => {
    console.log(state)
    return (<div style={{
        ...defaultStyle,
        ...transitionStyles[state]
    }}>
        I'm a fade Transition!
    </div>);
};


function App() {
    const [inProp, setInProp] = useState(false);
    return (
        <div>
            <ReactTransitionGroup.Transition in={inProp} timeout={duration} mountOnEnter>
                {Fade}
            </ReactTransitionGroup.Transition>
            <button onClick={() => setInProp(!inProp)}>
                Click to Enter
            </button>
        </div>
    );
};