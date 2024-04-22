class TaskInput extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            name: ''
        }
    };


    render() {
        return (<div>
            <input value={this.state.name} onChange={(event) => {
                this.setState({
                    name: event.target.value
                });
            }}></input>
            <button onClick={() => {
                this.props.oAdd && this.props.oAdd(this.state.name);
            }}>添加任何</button>
        </div>);
    }
}