class Index extends React.PureComponent {
    constructor(props) {
        super(props);
    };



    render() {
        return (<div>
            <A></A>
            <C></C>
            <button onClick={()=>{
                console.log('==')
            }}>点击</button>
        </div>);
    };
};



function A(props) {
    return (<div onClick={(e) => {
        console.log('A')
    }}>A
        <B></B>
    </div>);
};


function B(props) {
    return (<div onClick={(e) => {
        console.log('B')
    }}>B</div>);
};

function C(props) {
    return (<div onClick={(e) => {
        console.log('C')
    }}>C</div>);
};