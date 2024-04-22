const cxt = React.createContext();

class Test extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            a: 1
        }
    };

    /* shouldComponentUpdate() {
        console.log('Test')
        return false
    } */

    render() {
        return (<cxt.Provider value={this.state}>
            <div>
                <h1>Test</h1>
                <button onClick={() => {
                    this.setState({ a: Math.random() });
                }}>点击</button>
                <A></A>
            </div>
           
        </cxt.Provider>)
    }
};



class A extends React.Component {
    constructor(props) {
        super(props);
    };

   /*  static contextType = cxt */

    shouldComponentUpdate() {
        console.log('1')
        return false
    }

    render() {
        console.log('A')
        return (<div>
            <h1>A</h1>
            <B></B>
        </div>);
    }
};



class B extends React.Component {
    constructor(props) {
        super(props);
    };
    static contextType = cxt
    shouldComponentUpdate() {
        console.log('2')
        return false
    }

    render() {
        console.log('B')
        return (<div>
            <h1>B</h1>
            <C></C>
        </div>);
    }
};


class C extends React.Component {
    constructor(props) {
        super(props);
    };
    static contextType = cxt
    shouldComponentUpdate() {
        console.log('3')
        return false
    }

    render() {
        console.log('C')
        return (<div>
            <h1>C</h1>
        </div>);
    }
}