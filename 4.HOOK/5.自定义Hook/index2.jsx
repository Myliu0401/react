
/**
 * 利用 render Props 来实现抽离
 */
class AllStudents extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    };


    async componentDidMount() {
        const obj = await totalPagingData();
        this.setState(obj);
    }


    render() {
        if (!this.props.render) {
            return;
        };
        return this.props.render(this.state);
    };
};



function Test(props) {
    return (<ul>
        {
            props.data && props.data.map((it, index) => {
                return (<li key={it.id}>【姓名】:{it.name}、【性别】:{it.sex == 1 ? '男' : '女'}</li>);
            })
        }
    </ul>);
};


