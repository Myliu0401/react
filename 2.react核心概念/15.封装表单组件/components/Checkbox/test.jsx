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
            check: []
        }
    };


    func = (event,name, newArr) => {
        this.setState({
            check: newArr
        });
    }


    render() {
 
        return (<Checkbox datas={this.state.datas} check={this.state.check} func={this.func}></Checkbox>)
    }
}