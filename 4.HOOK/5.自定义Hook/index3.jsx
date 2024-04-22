


function Test() {

    const [page, setPage] = useState(1);

    const pageStudent = usePageStudents(page);


    return (<div>{pageStudent.data &&
        <div>
            <h1>总数:{pageStudent.total}</h1>
            <ul>{pageStudent.data.map((it) => {
                return (<li key={it.id}>【姓名】:{it.name}、【性别】:{it.sex == 1 ? '男' : '女'}</li>);
            })}</ul>
        </div>}
        <input value={page} onChange={(e) => {
            setPage(e.target.value);
        }} />
    </div>);
};