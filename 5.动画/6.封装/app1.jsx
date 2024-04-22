

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [{ id: 1, text: 'text1' }, { id: 2, text: 'text2' }]
        }
    };


    render() {


        return (<div>
            <ReactTransitionGroup.TransitionGroup component='ul'>
                {this.convert()}
            </ReactTransitionGroup.TransitionGroup>
            <button onClick={this.addData}>添加</button>
        </div>);
    };


    convert() {
        return this.state.data.map((it, index) => {
            return (<FadeTransition timeout={3000} key={it.id}>
                <li><button onClick={() => {
                    this.deleteData(it.id);
                }}>删除</button><span>{it.text}</span></li>
            </FadeTransition>);
        });
    };


    addData = () => {
        this.setState({
            data: [...this.state.data, { id: this.state.data.length + 1, text: `text${this.state.data.length + 1}` }]
        });
    };


    deleteData = (id) => {
        const arr = this.state.data.filter((it, index) => {
            return id !== it.id
        });
console.log(arr)
        this.setState({
            data: arr
        });
    }
};