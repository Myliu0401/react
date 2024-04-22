


/**
 * 获取所有学生数据  Hook
 */
function useAllStudents() {

    //状态Hook
    const [pagingObj, setPagingObj] = useState({});

    //副作用Hook
    useEffect(() => {

        //立即执行函数
        (async () => {
            const data = await totalPagingData();
            setPagingObj(data);
        })();

    }, []);

    return pagingObj
};