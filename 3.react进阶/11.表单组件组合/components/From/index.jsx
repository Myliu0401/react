


class From extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fromData: {

                //修改表单数据
                changeFromData: (name, value) => {
                    this.setState({
                        fromData: {
                            ...this.state.fromData,
                            [name]: value
                        }
                    });
                },

                //提交表单数据
                submit: () => {
                    console.log(this.state.fromData)
                }
            }
        };


    };



    render() {
        return (<fromCtx.Provider value={this.state}>
            {this.props.children}
        </fromCtx.Provider>);
    }
};


From.Input = FromInput;

From.Button = FromButton;