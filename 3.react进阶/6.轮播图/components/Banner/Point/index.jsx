class Point extends React.Component {
    constructor(props) {
        super(props);

        this.spot = React.createRef();
    };

    //属性验证
    static propTypes = {
        quantity: PropTypes.number.isRequired, //小点的数量
        index: PropTypes.number.isRequired,  //当前选中的索引
    };

    //属性默认值
    static defaultProps = {

    };

    
    generate() {
        const newArr = [];
        for (let i = 0; i < this.props.quantity; i++) {
            newArr.push(<span data-index={i} key={i} className={i === this.props.index ? 'active' : ''}></span>);
        };
        return newArr;
    };

    render() {
        return (<div className="banner_spot" ref={this.spot}>
            {this.generate()}
        </div>)
    };
}