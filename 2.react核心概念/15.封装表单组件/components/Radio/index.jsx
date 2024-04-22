class Radio extends React.Component {
    constructor(props) {
        super(props);
    };


    //生成单选框
    radioBoxes() {
        return this.props.datas.map((el, index) => {
            return (<label key={index}>{el.text}<input name={this.props.name} type="radio" value={el.value} checked={this.props.value === el.value} onChange={ (event)=>{
                this.props.func && this.props.func(event,this.props.name,event.target.value)
            } }></input></label>);
        });
    }


    render() {
         return (<div>
             {this.radioBoxes()}
         </div>)
    }
}