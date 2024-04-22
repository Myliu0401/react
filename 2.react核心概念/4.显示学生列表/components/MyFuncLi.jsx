
/**
 * 用于生成li标签
 * @param {*} props 配置属性 为一个对象
 * @returns 
 */
function MyFuncLi(props) {
    return (<li >【姓名】:{props.name}、【性别】:{props.ged == 0 ? '男' : '女'}、【地址】：{props.address}、【邮政编号】:{props.zip}</li>)
};