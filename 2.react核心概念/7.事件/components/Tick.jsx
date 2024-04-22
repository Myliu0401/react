class Tick extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: props.number
        }

        this.timer = setInterval(() => {
            if (this.state.number === 0) {
                clearInterval(this.timer);
                this.props.modify();
                return;
            };
            this.setState({
                number: this.state.number - 1,
            });
        }, 1000);

    };

    //es语法 不会赋值在原型上，而是赋值对象上
    stopIt = () => {
        clearInterval(this.timer)
    }


    render() {
        return (<React.Fragment><h1>倒计时 {this.state.number} <span style={{
            color: this.state.number === 0 ? 'red' : 'black'
        }}>爆炸</span></h1><button onClick={this.stopIt}>停止</button></React.Fragment>);
    }
}