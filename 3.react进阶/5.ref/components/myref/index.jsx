
class A extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return <span>123</span>
    };
}


class MyRef extends React.Component {
    constructor(props) {
        super(props);
    };



    render() {

        const a = <div>
            {a}
            <A ref="a2"></A>
        </div>
        return a;
    };
}