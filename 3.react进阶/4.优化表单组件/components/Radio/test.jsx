
const HocOption = Option(Radio);


class Test extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            value: '',
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
        }
    };


    render() {
        return (<HocOption name='radio' {...this.state} onChange={(value) => {
            this.setState({
                value,
            });
        }}></HocOption>);
    };
};