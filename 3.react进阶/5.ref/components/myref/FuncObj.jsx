class FuncObj extends React.Component {
    constructor(props) {
        super(props);

        this.txt = React.createRef();
    };

    refInput = (el) => {
        this.refI = el;
    };

    focusing = (e) => {
        this.refI.focus();
    };

    render() {
        return <div>
            <div>
                <input ref={this.refInput} />
                <button onClick={this.focusing}>聚焦A</button>
            </div>

            <div>
                <input ref={this.txt} />
                <button onClick={(event) => {
                    this.txt.current.focus();
                }}>聚焦B</button>
            </div>
        </div>
    }
}