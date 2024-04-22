class MyClassComp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numder: 0
        };


        setInterval(() => {
            this.setState({
                numder: this.state.numder + 1
            });
        }, 2000)
    };


    render() {
        return (<div>
            <A numder={this.state.numder}></A>
        </div>)
    }
};


function A(props) {
    return <React.Fragment>
        <p>numder {props.numder}</p>
        <B numder={props.numder}></B>
    </React.Fragment>
};



function B(props) {
    return <p>numder {props.numder}</p>
};