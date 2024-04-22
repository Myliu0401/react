
const Div1 = redundancy(DivMo);
const Coor1 = redundancy(Coor);


class Test extends React.PureComponent {
    constructor(props) {
        super(props);
    };

    render() {
        return (<div>
           <Div1></Div1>
           <Coor1></Coor1>
        </div>);
    }
}