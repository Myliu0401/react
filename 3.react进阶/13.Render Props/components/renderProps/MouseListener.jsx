



/**
 * 用于提取公共逻辑 ------ 获取鼠标坐标
 */
class MouseListener extends React.PureComponent {
    constructor(props) {
        super(props);

        this.mouser = React.createRef();

        this.state = {
            x: '',
            y: ''
        }
    };

    mouseListener = (event) => {
        // console.log(event.clientX)
        const info = this.mouser.current.getBoundingClientRect();
        this.setState({
            x: event.clientX - info.x,
            y: event.clientY - info.y
        });
    }


    render() {
        return (<div ref={this.mouser} className="mouser" style={{
            overflow: 'hidden'
        }} onMouseMove={this.mouseListener}>
            {this.props.render(this.state)}
        </div>);
    }


}