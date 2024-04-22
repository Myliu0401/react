class App extends React.PureComponent {
    constructor(props) {
        super(props);
    };
    componentDidMount(){
        console.log('componentDidMount')
    }

    render() {
        console.log('=++++++++++++++=')
        return (<div>
            <h1>App</h1>
            <ErrorComp>
                <A></A>
            </ErrorComp>
            <C></C>
        </div>)
    }
};



function A() {
    return (<div>
        <h1>A</h1>
        <B></B>  
    </div>);
};


function B() {
a
    return (<div>
        <h1>B</h1>
    </div>);
};


function C() {
    return (<h1>C</h1>)
};



class ErrorComp extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isError: false
        }
    };


   /*  static getDerivedStateFromError() {
        console.log('getDerivedStateFromError');
        return {
            isError: true
        }
    }; */
    componentDidCatch(){
        console.log('===========')
        this.setState({
            isError:true
        });
    }

    render() {
        if (this.state.isError) {
            return (<h1>ErrorComp</h1>)
        };

        return this.props.children;
    }
}

