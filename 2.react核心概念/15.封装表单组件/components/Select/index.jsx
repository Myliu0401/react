class Select extends React.Component {
    constructor(props) {
        super(props);

    };

    //生成下拉列表
    selectBoxes() {
        return this.props.datas.map((el, index) => {
            return (<option key={index} value={el.value}>{el.text}</option>);
        });
    }


    render() {
        return (<select value={this.props.value} onChange={(event) => {
            this.props.onChange && this.props.onChange(event, this.props.name, event.target.value)
        }}>
            {this.selectBoxes()}
        </select>);
    }
}





/**
 * 一组单选框
 */
//class Select extends React.Component {
//
//
//    handleChange = e => {
//        this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
//    }
//
//    /**
//     * 得到一组option
//     */
//    getOptions() {
//        return this.props.datas.map(it => (
//            <option key={it.value} value={it.value}>
//                {it.text}
//            </option>
//        ));
//    }
//
//    render() {
//        const options = this.getOptions();
//        return (
//            <select name={this.props.name}
//                value={this.props.value}
//                onChange={this.handleChange}
//            >
//                {options}
//            </select>
//        )
//    }
//}