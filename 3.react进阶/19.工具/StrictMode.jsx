class App extends React.Component {
    constructor(props) {
        super(props);
    };



    render() {
        return (<React.StrictMode>
            <A></A>
        </React.StrictMode>);
    };
};



class A extends React.Component {
    constructor(props) {
        super(props);

        console.log('constructor');
    };

    componentWillMount() {
        console.log('componentWillMount')
    };

    aa() {
        console.log('aa')
        return null;
    }

    render() {
        return (<div>
            StrictMode
            <B></B>
            {this.aa()}
        </div>);
    };
};


class B extends React.Component{
    constructor(props){
          super(props);
          console.log('B');
    };


    render(){
        return (<div>
            B
            <C></C>
        </div>);
    };
};
var p = 123

function C(){
    p = 456;
    return (<div>
        C
        { cc() }
    </div>);
};

const cc = ()=>{
    console.log('cc');
    return undefined;
};