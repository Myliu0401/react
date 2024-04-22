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
            value: 'Tennis',
        }
    };



    render() {
        return (<Select value={this.state.value} datas={this.state.datas} onChange={(event, name, value) => {
            this.setState({
                value: value
            });
        }}></Select>);
    }
}