class Test extends React.PureComponent {
    constructor(props) {
        super(props);
    };


    render() {
        return (<div>
            <MouseListener render={DivMo}></MouseListener>
            <MouseListener render={Coordinates}></MouseListener>
        </div>);
    }
};