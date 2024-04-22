
/**
 * 分页组件
 * current   当前页码
 * total     总数据量
 * capacity  页容量
 * pageMaxNumber   最多显示的页码量
 */
class Paging extends React.Component {
    constructor(props) {
        super(props);

        //设置默认值 
        this.current = props.current ? props.current : 1;   //当前页码
        this.total = props.total ? props.total : null;   //总数据量
        this.capacity = props.capacity ? props.capacity : 10; //页容量
        this.pageMaxNumber = props.pageMaxNumber ? props.pageMaxNumber : 10; //最多显示的页码量

    };


    /**
     * 处理分页函数
     * @param {*} current 当前选中的页码
     * @param {*} totalPaging   总页数
     * @param {*} func    处理函数
     * @returns 
     */
    jumpPaging(current, totalPaging, func) {
        return (event) => {
            const index = event.target.dataset.index;
            if (!index || index == current || (current == 1 && index == '首页') || (current == totalPaging && index == '尾页') || (current == 1 && index == '上一页') || (current == totalPaging && index == '下一页')) {
                return;
            };

            let page = null;

            switch (index) {
                case '首页': page = 1; break;
                case '上一页': page = +current - 1; break;
                case '尾页': page = totalPaging; break;
                case '下一页': page = +current + 1; break;
                default: page = index;
            }

            func && func(page);

        }
    };

    /**
     * 算出总页数，因为this的问题，所以采用传参的方式来进行
     * @param {*} total      总数据量
     * @param {*} capacity   也容量
     * @returns 
     */
    totalPaging(total, capacity) {
        if (!total) {
            return null;
        };

        return Math.ceil(total / capacity);
    }


    /**
     * 当前显示的最大页码
     * @param {*} minPaging        当前显示的最小页码
     * @param {*} pageMaxNumber    最多显示的页码量
     * @param {*} totalPaging      总页数
     */
    maxPageNumber(minPaging, pageMaxNumber, totalPaging) {
        const max = minPaging + pageMaxNumber - 1;
        return max > totalPaging ? totalPaging : max;
    };


    /**
     * 当前显示的最小页码
     * @param {*} current            当前显示最小页码
     * @param {*} pageMaxNumber      最多显示的页码量
     * @returns 
     */
    minPageNumber(current, pageMaxNumber) {
        const min = current - Math.ceil(pageMaxNumber / 2);
        return min <= 0 ? 1 : min;
    };


    /**
     * 当前显示的页量
     * @param {*} maxPageNumber   当前显示最小的页码
     * @param {*} minPageNumber   当前显示最大的页码
     * @param {*} current         当前选中的页码
     */
    numberOfPages(maxPageNumber, minPageNumber, current) {
        const pagings = [];
        for (let i = minPageNumber; i <= maxPageNumber; i++) {
            pagings.push(<li key={i} className={`container_li ${i == current ? 'current' : ''}`} data-index={i}>{i}</li>);
        };

        return pagings;
    };


    render() {

        if (!this.total) {
            return null;
        };
        const totalPaging = this.totalPaging(this.total, this.capacity);   //总页数
        const min = this.minPageNumber(this.current, this.pageMaxNumber); //显示的最小页码

        const max = this.maxPageNumber(min, this.pageMaxNumber, totalPaging); //显示的最大页码



        return (<div className="paging" onClick={this.jumpPaging(this.current, totalPaging, this.props.func)}>
            <div className="paging_about">
                <span className={`about_most ${this.current === 1 ? 'tightUse tightUseBg' : ''}`} data-index={'首页'}>首页</span>
                <span className={`about_around  ${this.current === 1 ? 'tightUse tightUseBg' : ''}`} data-index={'上一页'}>上一页</span>
            </div>
            <ul className="container">{this.numberOfPages(max, min, this.current)}</ul>
            <div className="paging_about">
                <span className={`about_around ${totalPaging === this.current ? 'tightUse tightUseBg' : ''}`} data-index={'下一页'}>下一页</span>
                <span className={`about_most ${totalPaging === this.current ? 'tightUse tightUseBg' : ''}`} data-index={'尾页'}>尾页</span>
            </div>
        </div>);
    }
};