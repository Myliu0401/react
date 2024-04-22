class Min extends React.Component {
    constructor(props) {
        super(props);

        this.mydata = props.data ? props.data.map((el, index) => {
            return (<li key={el.id}>【姓名】{el.name}、【性别】{el.gen}、【地址】{el.address}、【邮编】{el.zip}</li>)
        }) : null;
    }


    render() {
        if(!this.props.show){
            return (<div style={{textAlign:'center'}}>加载中...</div>);
        }
        return (<ul>{this.mydata}</ul>)
    }
}