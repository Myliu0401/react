class Test extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            datas: [{
                value: 'Basketball',
                text: '篮球'
            }, {
                value: "Football",
                text: '足球'
            }, {
                value: 'badminton',
                text: '羽毛球'
            }, {
                value: 'Tennis',
                text: '乒乓球'
            }, {
                value: 'run',
                text: '跑步'
            }, {
                value: 'fishing',
                text: '钓鱼'
            }],
            value: '',
        }
    };



    render() {
        return (<Radio  value={this.state.value} datas={this.state.datas} func={(event, name, value) => {
            this.setState({
                value: value
            });
        }}></Radio>);
    }
}