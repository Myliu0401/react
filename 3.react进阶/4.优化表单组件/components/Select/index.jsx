class Select extends React.Component {
    constructor(props) {
        super(props);
    };


    static propTypes = {
        info: PropTypes.object.isRequired,
    }


    render() {
        return (<option value={this.props.info.value}>{this.props.info.text}</option>)
    }
};

const HocOption = Option(Select);

class Enclosure extends React.Component {
    constructor(props) {
        super(props);
    };

    static defaultProps = {
        datas: []
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func,
        value: PropTypes.string.isRequired,
        datas: PropTypes.array
    }

    render() {
        return (<select name={this.props.name} onChange={(event) => {
            this.props.onChange && this.props.onChange(event.target.value);
        }} value={this.props.value}>
            <HocOption datas={this.props.datas}></HocOption>
        </select>)
    }
}