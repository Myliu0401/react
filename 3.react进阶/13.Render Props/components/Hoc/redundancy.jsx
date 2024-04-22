

/**
 * 高阶组件函数
 * @param {*} Comp  组件
 */
function redundancy(Comp) {
    return class MouseMovement extends React.PureComponent {
        constructor(props) {
            super(props);

            this.mouser = React.createRef();

            this.state = {
                x: '',
                y: ''
            };
        };


        mouseListener = (event) => {
            const info = this.mouser.current.getBoundingClientRect();
            this.setState({
                x: event.clientX - info.x,
                y: event.clientY - info.y
            });
        };

        render() {
            return (<div ref={this.mouser} className="mouser" onMouseMove={this.mouseListener}>
                <Comp {...this.state}></Comp>
            </div>);
        };
    }
}