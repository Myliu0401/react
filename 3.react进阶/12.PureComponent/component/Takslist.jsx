class Takslist extends React.Component {
    constructor(props) {
        super(props);
    };

    static propTypes = {
        taskArr: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, isFinish: PropTypes.bool })).isRequired,
    };

    //生成子元素
    generate() {
        return this.props.taskArr.map((tas, index) => {
            return (<Task key={tas.name} {...tas}></Task>);
        });
    }

    render() {
        console.log('Takslist render');

        return (<ul>
            {this.generate()}
        </ul>);
    };
};