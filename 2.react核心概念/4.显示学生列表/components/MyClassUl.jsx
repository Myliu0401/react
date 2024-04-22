
/**
 * 构造学生列表  props 为一个对象
 */
class MyClassUl extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const lists = this.props.stus.map((el, index) => {
            return (<MyFuncLi {...el} key={el.id}></MyFuncLi>)
        });

        return (<ul>{lists}</ul>);
    }
};