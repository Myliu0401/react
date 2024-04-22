class Home extends React.Component {
    constructor(props) {
        super(props);

        //状态数据
        this.state = {
            paging: 1, //分页
            dataArr: null, //用于存储总数据
            totle: null, //数据的总数
            show: false
        };


        qureGetData(this.state.paging).then((data) => {
            this.data1 = data.data;
            this.arr = Array(this.data1.totle).fill(null);
            this.modify();
        });


    };


    modify = () => {

        this.arr.splice((this.state.paging - 1) * 10, 10, ...this.data1.data);
        this.setState({
            dataArr: this.arr,
            totle: this.data1.totle,
            show: true
        });
    }




    render() {

        return (<div className="home">
            <Min show={this.state.show} key={Math.random()} data={this.state.dataArr ? this.state.dataArr.slice((this.state.paging - 1) * 10, this.state.paging * 10) : null}></Min>
            <div>
                <Paging current={this.state.paging} total={this.state.totle} key={Math.random()} func={async (index) => {
                    console.log(index)
                    this.setState({
                        show: false,
                    });
                    const data = await qureGetData(index);
                    this.arr.splice((index - 1) * 10, index * 10, ...data.data.data);
                    this.setState({
                        paging: index,
                        dataArr: this.arr,
                        show: true
                    });

                }}></Paging>
            </div>
        </div>);
    }
}