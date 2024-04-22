class My1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            num: 1
        };


        console.log('constructor', '初始化阶段')
    };

    componentWillMount() {
        console.log('componentWillMount', '组件虚拟dom即将挂载到页面，构建虚拟dom前执行')
    };

    componentDidMount() {
        console.log('componentDidMount', '虚拟dom渲染完成，并生成真实dom挂载到页面')
    };


    componentWillReceiveProps() {
        console.log('componentWillReceiveProps', '属性发生改变')
    };




    render() {
        console.log('render', '渲染虚拟dom')
        return (<div>
            <span>{this.state.num}</span>
            <button onClick={() => {
                this.setState({
                    num: this.state.num + 1
                });
            }}>状态/属性+1</button>
            <My2 num1={this.state.num}></My2>
        </div>);
    }
}