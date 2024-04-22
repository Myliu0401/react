import PropTypes from 'prop-types';
import TotalPaging from './totalPaging.jsx';
import './index.css';


export default function Paging(props) {



    if (!props || !props.total) {
        return null
    };


    return (<div className='paging_Comp'>
        <div className='paging' onClick={(event) => {
            const value = handle(event, props.current, pageCount(props.total, props.capacity));
            props.handleCha && value && props.handleCha(value);
        }}>
            <div className='headAndTail'>
                <span className={props.current == 1 ? 'span disable' : 'span'} data-index='首页'>首页</span>
                <span className={props.current == 1 ? 'span disable' : 'span'} data-index='上一页'>上一页</span>
            </div>
            <ul className='container'>
                {buildItem(props)}
            </ul>
            <div className='headAndTail'>
                <span className={props.current == pageCount(props.total, props.capacity) ? 'span disable' : 'span'} data-index='下一页'>下一页</span>
                <span className={props.current == pageCount(props.total, props.capacity) ? 'span disable' : 'span'} data-index='尾页'>尾页</span>
            </div>
        </div>
        <TotalPaging current={props.current} totalPaging={pageCount(props.total, props.capacity)} ></TotalPaging>
    </div>);
};


//默认属性
Paging.defaultProps = {
    total: null, //总数据量
    capacity: 10, //页容量
    displayPages: 10, //显示页数
    current: 1  //当前选中页
};

//属性验证
Paging.propTypes = {
    Total: PropTypes.number,
    capacity: PropTypes.number,
    displayPages: PropTypes.number,
    current: PropTypes.number,
    handleCha: PropTypes.func
};


/**
 * 总页数
 * @param {*} Total  总数据量 
 * @param {*} capacity  页容量
 */
function pageCount(Total, capacity) {

    return Math.ceil(Total / capacity);
};


/**
 * 当前显示的最小页数
 * @param {*} current   当前选中的页数
 * @param {*} displayPages  显示的最多页数
 */
function min(current, displayPages) {

    //一半
    const half = Math.ceil(displayPages / 2);

    return current - half < 1 ? 1 : current - half;
};


/**
 * 当前显示的最大页数
 * @param {*} current   当前选中的页数 
 * @param {*} displayPages   显示的最多页数
 * @param {*} pageCount   总页数
 */
function max(current, displayPages, pageCount) {

    const myMin = min(current, displayPages);
    
    const myMax = myMin + displayPages > pageCount ? pageCount : (myMin + displayPages) - 1;

    return {
        min: myMin,
        max: myMax
    };
};


/**
 * 生成页数
 * @param {*} param0 结构对象
 */
function buildItem({ total, capacity, displayPages, current }) {
    
    const obj = max(current, displayPages, pageCount(total, capacity));
    const items = [];
    for (let i = obj.min; i <= obj.max; i++) {
        items.push(<li key={i} data-index={i} className={current == i ? 'li active' : 'li'}>{i}</li>);
    };
    return items;
};


/**
 * 处理函数 对选中的分页进行处理
 * @param {*} e  事件对象
 * @param {*} current  当前选中的页码
 * @param {*} lastPage  尾页
 * @returns 
 */
function handle(e, current, lastPage) {

    const isDisable = e.target.classList.contains('disable');
    const isActive = e.target.classList.contains('active');
    if (isDisable || isActive || !e.target.dataset.index) {
        return false;
    };

    switch (e.target.dataset.index) {
        case '首页':
            return 1;
        case '上一页':
            return current - 1;
        case '尾页':
            return lastPage;
        case '下一页':
            return current + 1;
        default: return e.target.dataset.index;
    };
};

