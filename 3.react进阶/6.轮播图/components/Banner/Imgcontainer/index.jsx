class ImgContainer extends React.Component {
    constructor(props) {
        super(props);

        this.ulRef = React.createRef();
        this.state = {
            myIndex: props.index, //初始化索引，防止直接用后续出现问题
            totalWidth: props.imgSrcs.length * props.imgWidth, //总宽度  没有额外图片的总宽度

        };
        this.timerId = null; //计时器Id

    };


    static propTypes = {
        imgSrcs: PropTypes.array.isRequired,  //装图片的数组
        imgWidth: PropTypes.number.isRequired, //图片的宽
        imgHeight: PropTypes.number.isRequired, //图片的高
        duration: PropTypes.number, //过渡的时间
        index: PropTypes.number.isRequired, //当前图片的索引,
        onChange: PropTypes.func
    };



    //生成子元素
    generate() {
        const newArr = [];
        for (let i = 0; i < this.props.imgSrcs.length + 2; i++) {
            let index = null;

            if (i === 0 || i === this.props.imgSrcs.length + 1) {
                index = i === 0 ? this.props.imgSrcs.length - 1 : 0;
            };

            index = index === null ? i - 1 : index;

            newArr.push(<li key={i} style={{
                width: this.props.imgWidth,
                height: this.props.imgHeight
            }}><img src={this.props.imgSrcs[index]} style={{ width: '100%', height: '100%' }} /></li>);
        };


        return newArr;
    };


    switchTo(index, direction) {

        const marginLeft = parseFloat(getComputedStyle(this.ulRef.current).marginLeft); //当前的 marginLeft 值
        const targetLeft = -(index - -1) * this.props.imgWidth; //目标值
        const totalTimes = Math.ceil(this.props.duration / 16); //计时器执行的次数

        let totalLeft = null; //总距离 需要marginLeft的总距离
        if (direction === 'left' && marginLeft < targetLeft) {
            totalLeft = -(this.state.totalWidth - (Math.abs(marginLeft) - Math.abs(targetLeft)));
        } else if (direction === 'right' && marginLeft > targetLeft) {
            totalLeft = (this.state.totalWidth - (Math.abs(targetLeft) - Math.abs(marginLeft)));
        } else {
            totalLeft = targetLeft - marginLeft;
        };
        const valueLeft = totalLeft / totalTimes; //计时器每次执行需要添加的值

        this.myTimer(marginLeft, targetLeft, valueLeft, totalTimes, direction);
    };


    /**
     * 开启计时器
     * @param {*} marginLeft   当前marginLeft值 
     * @param {*} targetLeft   目标marginLeft值
     * @param {*} valueLeft    每次添加的值
     * @param {*} totalTimes   计时器执行的总次数
     * @param {*} direction    方向
     */
    myTimer(marginLeft, targetLeft, valueLeft, totalTimes, direction) {
        clearInterval(this.timerId);
        clearInterval(this.props.autoplaytimerId);
        let frequency = 0; //当前次数
        this.timerId = setInterval(() => {
            frequency++;
            marginLeft += valueLeft;

            //是否执行到最后一次
            if (frequency === totalTimes) {
                clearInterval(this.timerId);
                this.props.autoPlay();
                this.ulRef.current.style['marginLeft'] = targetLeft + 'px';
                return;
            };

            //判断边界
            if ((direction === 'left' && Math.abs(marginLeft) > this.state.totalWidth) || (direction === 'right' && Math.abs(marginLeft) < this.props.imgWidth)) {
                marginLeft = Math.abs(marginLeft) > this.state.totalWidth ? 0 : -(this.state.totalWidth + this.props.imgWidth);
            };

            this.ulRef.current.style['marginLeft'] = marginLeft + 'px';
        }, 16);
    };




    render() {
        let left = null;
        if (!this.ulRef.current) {
            left = -(this.state.myIndex - -1) * this.props.imgWidth
        };
        left || (left = parseFloat(getComputedStyle(this.ulRef.current).marginLeft)); //防止react多修改一次
        return <ul ref={this.ulRef} className="banner_imgcontent" style={{
            width: (this.props.imgSrcs.length + 2) * this.props.imgWidth + 'px',
            marginLeft: left + 'px'
        }}>
            {this.generate()}
        </ul>
    };
};


