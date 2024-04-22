


function Test() {

    const [pag, setPag] = useState({
        current: 1,
        pageCapacity: 10, //页容量
        pageNumber: 10, //显示的页码量
        totalNumber: 200, //总数据量
    });


    return (<div className="test" style={{
        width: 700,
        height: 100,
        border: '2px solid black',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)'
    }}><Paging onPageChang={
        (newPag) => {
            setPag({
                ...pag,
                current: newPag
            });
        }
    } {...pag}></Paging></div>);
};