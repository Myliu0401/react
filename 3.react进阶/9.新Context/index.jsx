

const ctx1 = React.createContext(); //创建一个上下文对象
console.log(ctx1, '=')
class NewContext extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 1,
            name: 'hello world',
            onchange: () => {
                this.setState({
                    index: this.state.index + 1
                });
            }
        }
    };


    shouldComponentUpdate() {
        console.log('NewContext')
        return true;
    };


    render() {
        return (<div>
            <ctx1.Provider value={this.state}>
            <button onClick={() => {
                this.state.onchange();
            }}>自己修改状态</button>
            <A></A>
        </ctx1.Provider>
        <div></div>
        <ctx1.Consumer>
            { (context)=>{ console.log(context, '========'); return <span>test<C></C></span> } }
        </ctx1.Consumer>
            </div>)
    }
};


function A(props) {
    return (<ctx1.Consumer>
        {(context) => {
            window.aa = context
            return (<div>
                <h1>A:{context.name}</h1>
                <B></B>
            </div>)
        }}
    </ctx1.Consumer>);
};



class B extends React.Component {
    constructor(props) {
        super(props);
    };

    static contextType = ctx1; //使用该上下文

    shouldComponentUpdate() {
        console.log('重渲染')
        return true;
    };

    render() {
        console.log(this, B.contextType, 'B')
        return (<div>
            <h1>B:{this.context.index}</h1>
            <button onClick={this.context.onchange}>子组件修改父组件状态</button>
            {/* <C></C> */}
        </div>);
    };
};



class C extends React.Component {
    constructor(props) {
        super(props);
    };
  //  static contextType = ctx1; //使用该上下文
    shouldComponentUpdate() {
        console.log('C')
        return true;
    };

    render() {
        console.log(this, '====')
        return (<h1>我是C组件</h1>);
    }
}