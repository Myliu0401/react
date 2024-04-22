class Radio extends React.Component {
    constructor(props) {
        super(props);
    };

    static propTypes = {
        value: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        info: PropTypes.object.isRequired,
        onChange: PropTypes.func,
    };



    render() {
        return (<label>{this.props.info.text}
            <input type='radio' name={this.props.name} 
            value={this.props.info.value} 
            checked={this.props.value === this.props.info.value} 
            onChange={(event) => {
                this.props.onChange && this.props.onChange(event.target.value);
            }}></input>
        </label>);
    }
};