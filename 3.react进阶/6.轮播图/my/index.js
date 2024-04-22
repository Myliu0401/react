/**
 * pc无缝轮播图插件
 */
class Banner {
    constructor({ imgcontentClass = '.banner_imgcontent',
        spotClass = '.banner_spot',
        arrowClass = '.banner_arrow',
        imgSrcs = [], imgWidth = 500, imgHeight = 300, duration = 2000 }) {


        this.imgSrcs = imgSrcs;  //图片
        this.imgWidth = imgWidth; //容器的宽
        this.imgHeight = imgHeight; //容器的高
        this.duration = duration; //过渡的总时间
        this.imgcontentDom = document.querySelector(imgcontentClass);   //装图片容器DOM
        this.spotDom = document.querySelector(spotClass);   //装小点容器DOM
        this.arrowDom = document.querySelector(arrowClass); //装箭头容器DOM
        this.totalWidth = null;  //总宽度 (没有机额外图片的总宽度)
        this.index = 0; //当前选中图片的索引
        this.timerId = null; //计时器ID编号
        this.autoTimerId = null; //自动播放的计时器id编号
        this.isMoveIn = false; //鼠标是否移入



        this.bannerInit();  //轮播图初始化
    };


    //轮播图初始化
    bannerInit() {
        this.imgInit(); //图片初始化
        this.spotInit(); //小点初始化
        this.arrowInit(); //箭头初始化
        this.directionEvent(); //箭头事件初始化
        this.pointEvent(); //小点事件初始化
        this.autoPlay(); //自动播放初始化
        this.moveInAndOut(); //鼠标移入移出初始化
    };


    //图片初始化
    imgInit() {
        const Doms = document.createDocumentFragment();
        for (let i = 0; i < this.imgSrcs.length + 2; i++) {
            const li = document.createElement('li');
            const img = document.createElement('img');
            if (i === 0 || i === this.imgSrcs.length + 1) {
                img.src = i === 0 ? this.imgSrcs[this.imgSrcs.length - 1] : this.imgSrcs[0];
            };
            img.src || (img.src = this.imgSrcs[i - 1]);
            img.style['width'] = this.imgWidth + 'px';
            img.style['height'] = this.imgHeight + 'px';
            li.appendChild(img);
            Doms.appendChild(li);
        };


        this.imgcontentDom.appendChild(Doms);

        this.imgcontentDom.style['width'] = (this.imgSrcs.length + 2) * this.imgWidth + 'px';   //宽度
        this.imgcontentDom.style['marginLeft'] = -(this.index - -1) * this.imgWidth + 'px';   //位置
        this.totalWidth = this.imgSrcs.length * this.imgWidth; //总宽度 (没有加额外图片时的总宽度)
    };


    //小点的初始化
    spotInit() {
        const Doms = document.createDocumentFragment();
        for (let i = 0; i < this.imgSrcs.length; i++) {
            const span = document.createElement('span');
            span.dataset.index = i;
            Doms.appendChild(span);
        }

        this.spotDom.appendChild(Doms);

        this.switchActiveSpot();  //初始化激活小点
    };

    //切换激活小点
    switchActiveSpot() {
        const spots = this.spotDom.children;
        const active = document.querySelector('.active');
        if (!active) {
            spots[this.index].className = 'active';
            return;
        };

        active.classList.remove('active');
        spots[this.index].className = 'active';
    };

    //初始化箭头
    arrowInit() {
        const Doms = document.createDocumentFragment();
        for (let i = 0; i < 2; i++) {
            const span = document.createElement('span');
            span.dataset.direction = i === 0 ? 'left' : 'right';
            span.innerHTML = i === 0 ? '&lt;' : '&gt;';
            Doms.appendChild(span);
        };


        this.arrowDom.appendChild(Doms);

    };

    /**
     * 切换轮播图
     * @param {*} index  当前选中轮播图
     * @param {*} direction  方向  向左 、 向右
     */
    switchTo(index, direction) {
        this.index = index;
        const marginLeft = parseFloat(getComputedStyle(this.imgcontentDom).marginLeft); //当前的 marginLeft值
        const totalTimes = this.duration / 16; //计时器执行的总次数
        const targetLeft = -(index - -1) * this.imgWidth; //目标值
        let totalLeft = null; //总距离
        if (direction === 'left' && targetLeft > marginLeft) {
            totalLeft = -(this.totalWidth - (Math.abs(marginLeft) - Math.abs(targetLeft)));

        } else if (direction === 'right' && targetLeft < marginLeft) {
            totalLeft = (this.totalWidth - (Math.abs(targetLeft) - Math.abs(marginLeft)));

        } else {
            totalLeft = targetLeft - marginLeft;
        };

        const aBitOf = totalLeft / totalTimes; //计时器每次执行添加的left值 

        this.myTimer(aBitOf, marginLeft, totalTimes, direction, targetLeft);
        this.switchActiveSpot();

    };


    /**
     * 开启计时器
     * @param {*} leftValue    每次添加的值
     * @param {*} marginLeft   当前的marginLeft值
     * @param {*} totalTimes   计时器执行的总次数
     * @param {*} direction    方向  向左、向右
     * @param {*} targetLeft   目标值
     */
    myTimer(leftValue, marginLeft, totalTimes, direction, targetLeft) {
        clearInterval(this.timerId);
        clearInterval(this.autoTimerId);
        let frequency = 0; //计时器当前执行的次数

        this.timerId = setInterval(() => {
            marginLeft += leftValue; //累积
            frequency++;
            if (totalTimes === frequency) {
                clearInterval(this.timerId);
                this.imgcontentDom.style['marginLeft'] = targetLeft + 'px';
                this.isMoveIn || this.autoPlay();
                return;
            };

            //判断边界
            if ((Math.abs(marginLeft) < this.imgWidth && direction === 'right') || (Math.abs(marginLeft) > this.totalWidth && direction === 'left')) {
              
                marginLeft = Math.abs(marginLeft) <= this.imgWidth ? -((this.imgSrcs.length + 1) * this.imgWidth) : 0;
            }

            this.imgcontentDom.style['marginLeft'] = marginLeft + 'px';

        }, 16);
    };

    //箭头点击事件
    directionEvent() {
        this.arrowDom.onclick = (event) => {
            const direction = event.target.dataset.direction;
            if (!direction) {
                return;
            };

            if (direction === 'left') {
                this.index++;
                if (this.index > this.imgSrcs.length - 1) {
                    this.index = 0;
                };
            } else if (direction === 'right') {
                this.index--;
                if (this.index < 1) {
                    this.index = this.imgSrcs.length - 1;
                };
            }
            this.switchTo(this.index, direction);
        }
    };


    //小点点击事件
    pointEvent() {
        this.spotDom.onclick = (event) => {
            const index = event.target.dataset.index;
            if (!index) {
                return;
            };

            this.switchTo(+index, this.index > index ? 'right' : 'left');
        }
    };


    //自动播放
    autoPlay() {
        this.autoTimerId = setInterval(() => {
            this.index = ++this.index % this.imgSrcs.length;
            this.switchTo(this.index, 'left');
        }, 2000);
    };


    //鼠标移入移出
    moveInAndOut() {
        //鼠标移入事件
        this.imgcontentDom.onmouseenter = () => {
            clearInterval(this.autoTimerId);
            this.isMoveIn = true;
        };

        //鼠标移出事件
        this.imgcontentDom.onmouseleave = () => {
            this.autoPlay();
            this.isMoveIn = false;
        };
    }


};