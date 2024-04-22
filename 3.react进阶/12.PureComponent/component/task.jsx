class Task extends React.PureComponent {
    constructor(props) {
        super(props);
    };

    //属性类型检测
    static propTypes = {
        name: PropTypes.string.isRequired,
        isFinite: PropTypes.bool.isRequired,
    };

    /* shouldComponentUpdate(newProps, newState) {
 
        //模拟PureComponent纯组件进行优化
        if (auxiliary(newProps, this.props) || auxiliary(newState, this.state)) {
            return true; //重新渲染
        };
        return false;
    } */

    render() {
        console.log(`Task render`);
        return (<li className={this.props.isFinite ? 'finite' : ''}>{this.props.name}</li>);
    };
};


