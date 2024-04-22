

function App() {

    const [isTrade, setIsTrade] = useState(true);

    return (<div className='my'> 
        <ReactTransitionGroup.SwitchTransition mode='out-in'>
            <ReactTransitionGroup.CSSTransition appear  key={Math.random()} timeout={2000}>
                <h1>SwitchTransition{isTrade ? '-TRUE' : '-FALSE'}</h1>
            </ReactTransitionGroup.CSSTransition>
        </ReactTransitionGroup.SwitchTransition>
        <button onClick={() => {
            setIsTrade(!isTrade);
        }}>刷新</button>
    </div>);

};