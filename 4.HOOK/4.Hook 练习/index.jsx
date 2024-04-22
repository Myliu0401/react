

function App() {

    const [page, setPage] = useState({
        current: 1, //默认选中第一项
        pageCapacity: 10, //页容量
        pageNumber: 10, //显示的页码量
        totalNumber: 0 //总数据量
    });


    const [load, setLoad] = useState(true);

    const [data, setData] = useState([]);

    useEffect(() => {

        //因为副作用函数要求返回值不能是对象，所以在副作用函数里再写多一个函数
        (async () => {
            const data = await apiPage();
            if (data.data.code === 0) {
                setData(data.data.data);
                setPage({
                    ...page,
                    totalNumber: data.data.total
                });
                setLoad(false);
            } else if (data.data.msg) {
                setData(null);
                setLoad(false);
            }
        })(); //立即执行函数 

    }, [page.current]);

    const text = load ? '数据加载中' : data == null && '暂无数据';

    return (<div>{
        load ? (<h2>{text}</h2>) : (<Container data={data}></Container>)
    }
        <div>
            <Paging {...page} onPageChang={
                (newPag) => {
                    setPage({
                        ...page,
                        current: newPag
                    });
                    setLoad(true);
                }
            }></Paging>
        </div>
    </div>);
};