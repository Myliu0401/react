


/**
 * 
 * @param {*} Comp  组件函数
 * @returns  组件
 */
function MyWith(Comp) {
    return class MyWithClass extends React.Component {
        constructor(props) {
            super(props);
        };

        componentDidMount() {
            console.log(`组件${Comp.name}被创建  时间戳 ${Date.now()}`);
        };

        componentWillUnmount() {
            console.log(`组件${Comp.name}被销毁  时间戳 ${Date.now()}`)
        }

        render() {
            if (this.props.isLogOn) {
                return (<Comp {...this.props}></Comp>);
            } else {
                return null;
            }
        }
    }
};