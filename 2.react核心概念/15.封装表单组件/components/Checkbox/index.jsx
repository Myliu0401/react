

/**
 * 多选框组件
 */
class Checkbox extends React.Component {
    constructor(props) {
        super(props);


    };

    myCheck = (event) => {
    
        let newArr;
        if (event.target.checked) {
            newArr = [...this.props.check, event.target.value]
        } else {
            newArr = this.props.check.filter((el, index) => {
                return el !== event.target.value
            });
        };

        this.props.func && this.props.func(event, this.props.name, newArr);
    }

    //生成多选框
    checkBoxes() {

        return this.props.datas.map((el, index) => {
            return (<label key={index}>
                {el.text}
                <input type="checkbox" name={this.props.name} value={el.value} checked={this.props.check.includes(el.value)} onChange={this.myCheck}></input>
            </label>)
        });
    }


    render() {
        return (<div>
            {this.checkBoxes()}
        </div>);
    }
}