
/**
 * 数字输入框组件
 */
class NumberInput extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            val: '',
        }
    };
    aa = () => {
        console.log(this)
    };
    myInput = (event) => {
        const val = event.target.value.replace(/\D/g, '');
        this.setState({
            val: val
        });
    }


    render() {
        return (<div>
            <label>
                NumberInput:<input value={this.state.val} onChange={this.myInput} placeholder="只能设置数字"></input>
            </label>
            <button onClick={this.aa/* () => {
                console.log(this.state, this.aa())
            } */}>查看NumberInput的状态</button>
        </div>)
    }
};