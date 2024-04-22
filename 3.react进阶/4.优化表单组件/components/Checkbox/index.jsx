

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
    };

    static propTypes = {
        info: PropTypes.object.isRequired, //选项的信息对象
        name: PropTypes.string.isRequired, //name名
        onChange: PropTypes.func, //点击后触发的函数
        chooseDatas: PropTypes.array.isRequired //装选中的项的数组
    };

    handleChange = (event)=> {
        
        let newArr;

        if (event.target.checked) {
            //添加项

            newArr = [...this.props.chooseDatas, event.target.value];

        } else {
            //过滤

            newArr = this.props.chooseDatas.filter((el, index) => {
                return this.props.info.value !== el;
            });
        };


        this.props.onChange && this.props.onChange(newArr);

    };

    render() {
        return (<label>
            {this.props.info.text}
            <input
                value={this.props.info.value}
                name={this.props.name}
                type="checkbox"
                checked={this.props.chooseDatas.includes(this.props.info.value)} onChange={this.handleChange}></input></label>);
    };
};