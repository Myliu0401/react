


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isShow: true,
        }
    };



    render() {
        return (<div>
            <FadeTransition in={this.state.isShow} timeout={2000} appear>
                <h1> Fade </h1>
            </FadeTransition>
            <button onClick={() => {
                this.setState({
                    isShow: !this.state.isShow
                });
            }}>显示/隐藏</button>
        </div>);
    };
};