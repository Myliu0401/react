class Container extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            tasks: [],

        }
    };

    oAdd = (value) => {
        
        this.setState({
            tasks: [...this.state.tasks, { name: value, isFinite: Math.random() > 0.5 }]
        });
    }

    componentDidMount() {
        const newArr = [];
        for (let i = 0; i < 10; i++) {
            newArr.push({
                name: `任务${i}`,
                isFinite: Math.random() > 0.5
            });
        };
        this.setState({
            tasks: newArr
        });
    }


    render() {
        console.log(`Container render`);
        return (<div>
            <TaskInput oAdd={this.oAdd}></TaskInput>
            <Takslist taskArr={this.state.tasks}></Takslist>
        </div>);
    }
};