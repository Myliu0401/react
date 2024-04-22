function Test(){


    const [,set] = React.useState({});

    return (<div>
        <h1>TEST</h1>
        <button onClick={()=>{
              set({}); //强制刷新
        }}>点击</button>
        <A></A>
        <B></B>
    </div>)
};



class A extends React.Component{
    constructor(props){
         super(props);
    };
    shouldComponentUpdate() {
        console.log('1')
        return false
    }

    render(){
        console.log('A')
        return (<div>
            <h1>A</h1>
            <B></B>
        </div>)
    }
}


class B extends React.Component{
    constructor(props){
         super(props);
         console.log('=====')
    };
    shouldComponentUpdate() {
        console.log('2')
        return false
    }

    render(){
        console.log('B')
        return (<div>
            <h1>B</h1>
        </div>)
    }
}