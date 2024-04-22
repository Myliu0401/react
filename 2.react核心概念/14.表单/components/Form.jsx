class Form extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            loginId: '', //账号
            loginPwd: '', //密码
            myCheckbox: [], //已选中的多选择框
            multiCheckBox: [{
                value: 'Basketball',
                text: '篮球'
            }, {
                value: "Football",
                text: '足球'
            }, {
                value: 'badminton',
                text: '羽毛球'
            }, {
                value: 'Tennis',
                text: '乒乓球'
            }, {
                value: 'run',
                text: '跑步'
            }, {
                value: 'fishing',
                text: '钓鱼'
            }], //多选框信息
            sex: '', //性别
            city: '', //城市
        }
    };

    //生成多款框列表
    gmBoxLists = () => {
        return this.state.multiCheckBox.map((el, index) => {
            return (<label key={el.value}>{el.text}<input name='myCheckbox'
                type='checkbox'
                value={el.value}
                checked={this.state.myCheckbox.includes(el.value)}
                onChange={this.myChange}
            ></input></label>);
        });
    };


    myChange = (event) => {
        let val = event.target.value;
        const name = event.target.name;

        if (name === 'loginId') {
            val = val.replace(/\D/g, '');
        } else if (name === 'myCheckbox') {
            if (this.state.myCheckbox.includes(val)) {
                //进行过滤
                val = this.state.myCheckbox.filter((el, index) => {
                    return el !== val;
                });
            } else {
                //进行数组的赋值
                val = [...this.state.myCheckbox, val];
            }
        };

        this.setState({
            [name]: val
        });
    };


    render() {
        return (<div>
            <div>
                <h2>账号</h2>
                <label>账号:<input name='loginId' placeholder="请输入数字账号" value={this.state.loginId} onChange={this.myChange}></input></label>
                <br></br>
                <label>密码:<input name='loginPwd' placeholder="请输入密码" value={this.state.loginPwd} onChange={this.myChange}></input></label>
            </div>
            <div>
                <h2>性别</h2>
                <label>男:<input name="sex" type='radio' checked={this.state.sex === 'male'} onChange={this.myChange} value='male'></input></label>
                <label>女:<input name="sex" type='radio' checked={this.state.sex === 'female'} onChange={this.myChange} value='female'></input></label>
            </div>
            <div>
                <h2>爱好</h2>
                {this.gmBoxLists()}
            </div>
            <div>
                <h2>城市</h2>
                <select onChange={this.myChange} name='city' value={this.props.city}>
                    <option>请选择城市</option>
                    <option value="Beijing">北京</option>
                    <option value="Shanghai">上海</option>
                    <option value="Guangzhou">广州</option>
                    <option value="Shenzhen">深圳</option>
                    <option value="Hangzhou">杭州</option>
                    <option value="Chongqing">重庆</option>
                    <option value="Wuhan">武汉</option>
                    <option value="Chengdu">成都</option>
                </select>
            </div>
            <button onClick={() => {
                console.log(this.state)
            }}>查看参数</button>
        </div>);
    };
}