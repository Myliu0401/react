
/**
 * 
 */
class Ball extends React.Component {
    constructor(props) {
        super(props)

        //状态数据
        this.state = {
            left: props.Left || 0,  //小球的位置left
            top: props.Top || 0,   //小球的位置top
        };

        const interval = 16; //间隔毫秒数


        //速度 每秒添加几像素
        let xSeed = (props.xSeed ? props.xSeed : 100) * interval / 1000;
        let ySeed = (props.ySeed ? props.ySeed : 100) * interval / 1000;

        const screenWidth = document.documentElement.clientWidth; //屏幕的宽
        const screenHeight = document.documentElement.clientHeight; //屏幕的高

        const timer = setInterval(() => {

            if (this.state.left < 0 || this.state.top < 0) {
                xSeed = this.state.left < 0 ? Math.abs(xSeed) : xSeed;
                ySeed = this.state.top < 0 ? Math.abs(ySeed) : ySeed;
            } else if (this.state.left > screenWidth - (this.width ? this.width : 100) || this.state.top > screenHeight - (this.height ? this.height : 100)) {
                xSeed = this.state.left > screenWidth - (this.width ? this.width : 100) ? -Math.abs(xSeed) : xSeed;
                ySeed = this.state.top > screenHeight - (this.height ? this.height : 100) ? -Math.abs(ySeed) : ySeed;
            }

            this.setState({
                left: this.state.left += xSeed,
                top: this.state.top += ySeed
            });
            
        }, interval);
    };

    render() {

        return (<div className="Ball" style={{
            width: this.width ? this.width : 100,
            height: this.height ? this.height : 100,
            backgroundColor: this.props.bg || 'red',
            left: this.state.left,
            top: this.state.top,
        }}></div>);
    }
}