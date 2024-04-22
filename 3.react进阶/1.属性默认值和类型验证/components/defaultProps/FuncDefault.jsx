function FuncDefault(props) {
    return (<div>
        <h3>构造函数  默认值</h3>
        a:{props.a} b:{props.b} c:{props.c}
    </div>)
};



//添加默认值属性
FuncDefault.defaultProps = {
    a: 123,
    b: 456,
    c: 789
}