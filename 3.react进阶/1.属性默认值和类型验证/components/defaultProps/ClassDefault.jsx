class ClassDefault extends React.Component {
    constructor(props) {
        super(props);
    };


    //添加默认属性
    static defaultProps = {
        a: 987,
        b: 654,
        c: 321
    };

    render() {
        return (<div>
            <h3>类   默认值</h3>
            a:{this.props.a}  b:{this.props.b}  c:{this.props.c}
        </div>);
    };
};