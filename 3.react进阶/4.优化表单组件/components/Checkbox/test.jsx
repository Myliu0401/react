
const HocOption = Option(Checkbox);

class Test extends React.Component {
    constructor(props) {
        super(props);



        this.state = {
            chooseDatas: [],
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
            }]
        }
    };



    render() {
        return (<HocOption name='checkbox' onChange={(newArr) => {
            this.setState({
                chooseDatas: newArr
            });
        }} {...this.state}></HocOption>);
    }
}