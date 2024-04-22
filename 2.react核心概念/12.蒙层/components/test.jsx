class Test extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            show: true
        }
    };

    myClose = () => {
        this.setState({
            show: !this.state.show
        });
    };


    render() {
        return (<div>
            <img src="https://img0.baidu.com/it/u=1377351719,1863175279&fm=26&fmt=auto"></img>
            {this.state.show &&
                <Mantle myClose={this.myClose}>
                    <div style={{ width: 300, height: 300, backgroundColor: '#fff', borderRadius: 15, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>
                        <p>hello world</p>
                        <button onClick={this.myClose}>关闭</button>
                    </div>
                </Mantle >

            }
        </div >)
    }
}