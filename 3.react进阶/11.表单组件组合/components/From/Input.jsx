


class FromInput extends React.Component {
    constructor(props) {
        super(props);
    };

    static contextType = fromCtx;

    //属性类型检测
    static propTypes = {
        name: PropTypes.string.isRequired, //文本框名称
        type: PropTypes.string.isRequired, //文本框的类型
    };

    static defaultProps = {
        type: 'text',
    };


    render() {
       
        return (<input value={this.context.fromData[this.props.name] || ''} type={this.props.type}
            onChange={(event) => {
                this.context.fromData.changeFromData && this.context.fromData.changeFromData(this.props.name, event.target.value);
            }}
        ></input>);
    };
};
