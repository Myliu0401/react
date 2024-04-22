class Tclik extends React.Component {
    constructor(props) {
        super(props);

        //对状态进行初始化
        this.state = {
            num: 10
        };

        this.timer = setInterval(() => {
            if (this.state.num <= 0) {
                clearInterval(this.timer);
                return;
            }
            this.setState({
                num: this.state.num - 1
            });
        }, props.time);
    };


    render() {
        return (<h1>剩下{this.state.num}几秒，爆炸</h1>);
    }
};