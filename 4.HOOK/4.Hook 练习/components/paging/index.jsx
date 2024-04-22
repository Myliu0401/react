

/**
 * 分页的函数组件
 * @param {*} props  属性对象
 */
function Paging(props) {

    if (!props.totalNumber) {
        return null;
    }

    return (<div className="paging" onClick={(event) => {
        processing(event, props);
    }}>
        <div className="paging_andDown">
            <span className={props.current == 1 ? 'andDown disable' : 'andDown'} data-index='首页'>首页</span>
            <span className={props.current == 1 ? 'andDown disable' : 'andDown'} data-index='上一页'>上一页</span>
        </div>
        <ul className="paging_container">{buildItem(props)}</ul>
        <div className="paging_andDown">
            <span className={props.current == totalPageNumber(props.totalNumber, props.pageCapacity) ? 'andDown disable' : 'andDown'} data-index='下一页'>下一页</span>
            <span className={props.current == totalPageNumber(props.totalNumber, props.pageCapacity) ? 'andDown disable' : 'andDown'} data-index='尾页'>尾页</span>
        </div>
    </div>);

};

//默认属性
Paging.defaultProps = {
    current: 1, //当前选中的页码
    pageCapacity: 10, //页容量
    pageNumber: 10, //显示的最多页码
    totalNumber: 0, //总数据量
};

//属性校验
Paging.propTypes = {
    current: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    pageCapacity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    pageNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    totalNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    onPageChang: PropTypes.func
};

/**
 * 算出总页码
 * @param {*} total   总数
 * @param {*} pageCapacity   页容量  
 */
function totalPageNumber(total, pageCapacity) {
    return Math.ceil(total / pageCapacity);
};


/**
 * 显示的页码
 * @param {*} current  选中的页码
 * @param {*} pageNumber  显示的最多页码
 */
function showPageNumbers(current, pageNumber, total, pageCapacity) {

    const half = Math.ceil(pageNumber / 2); //一半
    const totalPage = totalPageNumber(total, pageCapacity); //总页数

    const minPage = current - half <= 1 ? 1 : current - half; //当前显示的最小页码

    const maxPage = minPage + pageNumber >= totalPage ? totalPage : (minPage + pageNumber) - 1; //当前显示的最大页码

    return {
        minPage,  //当前显示的最小页码
        maxPage,  //当前显示的最大页码
    };
};


/**
 * 生成子项
 * @param {*} props 属性对象
 */
function buildItem(props) {

    const pageInfo = showPageNumbers(props.current, props.pageNumber, props.totalNumber, props.pageCapacity);
    const itArr = [];
    for (let i = pageInfo.minPage; i <= pageInfo.maxPage; i++) {
        itArr.push((<li key={i} className={i == props.current ? 'term active' : 'term'} data-index={i}>{i}</li>));
    };

    return itArr;
};


/**
 * 点击分页的处理函数
 * @param {*} event  事件对象 
 * @param {*} props  属性对象
 */
function processing(event, props) {
    let current = event.target.dataset.index;
    const total = totalPageNumber(props.totalNumber, props.pageCapacity);
    if (!current || current == props.current || (props.current == 1 && current == '上一页') || (props.current == total && current == '下一页') || (props.current == 1 && current == '首页') || (props.current == total && current == '尾页')) {
        return;
    };

    if (current === '首页' || current === '尾页') {
        current = current === '首页' ? 1 : total;
    } else if (current === '上一页' || current === '下一页') {
        current = current === '上一页' ? +props.current - 1 : +props.current + 1;
    };
    props.onPageChang(current);
};

