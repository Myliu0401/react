
const useState = React.useState;


function App() {

    const [showHide, setShowHide] = useState(true);


    return (<div>
        <p style={{ display: showHide ? 'block' : 'none' }}>============这是一条性感的分界线============</p>
        <button onClick={() => {
            setShowHide(!showHide);
        }}>显示/隐藏</button>
    </div >);
};