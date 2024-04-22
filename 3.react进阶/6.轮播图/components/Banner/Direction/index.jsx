class Direction extends React.Component {
    constructor(props) {
        super(props);
    };

    static propTypes = {
        onChange: PropTypes.func,

    };



    render() {
        return (<div className="banner_arrow">
            <span data-direction='left' onClick={() => {
                this.props.onChange('left');
            }}>&lt;</span>
            <span data-direction='right' onClick={() => {
                this.props.onChange('right');
            }}>&gt;</span>
        </div>);
    }
}