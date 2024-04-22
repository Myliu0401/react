



/**
 * 获取分页学生数据  Hook
 */
function usePageStudents(page = 1) {
    const [pageObj, setPageObj] = useState({});

    useEffect(() => {
        (async () => {
            const obj = await pagingData(page);
            setPageObj(obj);
        })();
    }, [page]);

    return pageObj;
};