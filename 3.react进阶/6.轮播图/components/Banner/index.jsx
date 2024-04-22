class Banner extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            index: props.index, //切换图片的索引
            autoplaytimerId: true, //自动播放定时器id
        };
        this.imgCon = React.createRef();
        this.banner = React.createRef();
    };


    //属性验证
    static propTypes = {
        imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired, //装图片数组
        imgWidth: PropTypes.number, //图片的宽
        imgHeight: PropTypes.number, //图片的高
        duration: PropTypes.number, //完成一次切换需要的时间  毫秒为单位
        autoDuration: PropTypes.number, //自动切换的间隔时间  毫秒为单位
        index: PropTypes.number,  //当前图片的索引
    };


    static defaultProps = {
        imgSrcs: [], //默认转图的数组
        imgWidth: 500,  //图片默认的宽
        imgHeight: 300, //图片默认的高
        duration: 1000, //切换完成需要的时间
        autoDuration: 2000, //自动切换的间隔时间
        index: 0, //默认选中图片的索引
    };

    //切换图片
    switchTo = (direction) => {
        let index = this.state.index;
        if (direction === 'left') {
            index++;
            if (index > this.props.imgSrcs.length - 1) {
                index = 0;
            }
        } else if (direction === 'right') {
            index--;
            if (index < 0) {
                index = this.props.imgSrcs.length - 1;
            }
        };
        this.imgCon.current.switchTo(index, direction);

        this.setState({
            index: index
        });
    };

    //自动播放
    autoPlay = () => {
        const autoplaytimerId = setInterval(() => {
            this.switchTo('left');
        }, this.props.autoDuration);
        this.setState({
            autoplaytimerId: autoplaytimerId
        });
    };

    //鼠标移入移出事件
    moveInAndOut() {
        //鼠标移入事件
        this.banner.current.onmouseenter = () => {
           // clearInterval(this.state.autoplaytimerId);
        }

        //鼠标移出事件
        this.banner.current.onmouseleave = () => {
           // this.autoPlay();
        }
    }

    componentDidMount() {
        this.autoPlay();
        this.moveInAndOut();
    }


    render() {
        window.vm = this;
        return (<div className="banner" ref={this.banner}>
            <ImgContainer ref={this.imgCon} {...this.props} autoplaytimerId={this.state.autoplaytimerId} autoPlay={this.autoPlay}></ImgContainer>
            <Direction onChange={this.switchTo}></Direction>
            <Point quantity={this.props.imgSrcs.length} index={this.state.index}></Point>
        </div>);
    };
}