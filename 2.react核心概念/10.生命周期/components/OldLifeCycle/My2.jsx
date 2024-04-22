class My2 extends React.Component {
    constructor(props) {
        super(props);


    };


    componentWillReceiveProps(){
        console.log('My2  componentWillReceiveProps  属性发生变化')
    }


    render() {
        console.log('My2 render')
        return (<div>
            <span>属性{this.props.num1}</span>
        </div>)
    }

}