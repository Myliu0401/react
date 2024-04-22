

function Test() {
    const student = useAllStudents();
    return (<ul>
        {student.data && student.data.map((it, index) => {
            return (<li key={it.id}>【姓名】:{it.name}、【性别】:{it.sex == 1 ? '男' : '女'}</li>);
        })}
    </ul>);
};