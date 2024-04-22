class PageNumber extends React.Component {
    constructor(props) {
        super(props);

        this.total = props.total ? props.total : null;   //总数据量
        this.current = props.current ? props.current : null;  //当前选中页数
        this.capacity = props.capacity ? props.capacity : 10; //页容量
    };

    /**
     * 算出总页数
     */
    totalPaging = () => {
        return Math.ceil(this.total / this.capacity);
    };

    render() {

        return (<div className="pagNumber">
            <span className="page_span">{this.props.current}</span>/<span className="page_span">{this.props.total}</span>
        </div>);
    }
}