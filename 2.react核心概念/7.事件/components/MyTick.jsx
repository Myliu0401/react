class MyTick extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '正在倒计时中...'
        }
    };

    //es 语法不会赋值在原型上，而是赋值在对象上，并且箭头函数会自动绑定this, 但该语法尚不成熟
    modify = () => {
        this.setState({
            text: '倒计时完成'
        });
    }


    render() {
        return (<div>
            <Tick number={10} modify={this.modify}></Tick>
            <p>{this.state.text}</p>
        </div>);
    }
}