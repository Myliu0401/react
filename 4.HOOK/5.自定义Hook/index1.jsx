


/**
 * 利用高阶组件来实现抽离功能
 * @param {*} Comp  函数/类 组件
 */
function withAllStudents(Comp) {
    return class AllStudentsWrapper extends React.Component {
        constructor(props) {
            super(props);

            this.state = {

            }
        };


        async componentDidMount() {
            const obj = await totalPagingData();
            this.setState(obj);
        }


        render() {
            return (<Comp {...this.state}></Comp>);
        }
    }
};


function Test(props) {

    return (<ul>{

        props.data && props.data.map((it, index) => {
            return (<li key={it.id}>【姓名】:{it.name}、【性别】:{it.sex == 1 ? '男' : '女'}</li>);
        })

    }</ul>);
};


const MyTest = withAllStudents(Test);