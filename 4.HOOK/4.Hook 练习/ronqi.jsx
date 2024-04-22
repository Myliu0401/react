


/**
 * 容器
 * @param {*} props 属性对象 
 */
function Container(props) {
    return (<ul>
        {termLi(props.data)}
    </ul>);
};


//属性默认值
Container.defaultProps = {
    data: [],
};

Container.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
};



/**
 * 生成项 li
 * @param {*} data  数据
 */
function termLi(data) {
    return data.map((it, index) => {
        return (<li key={it.id}>
            姓名：【{it.name}】、性别：【{it.sex == 1 ? '男' : '女'}】、地址：【{it.address}】
        </li>);
    });
};



