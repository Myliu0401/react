
/**
 * 圣杯布局组件
 * @param {*} props  属性
 */
function Layout(props) {

    //默认的属性
    const myDefault = {
        leftWidth: 200,   //默认左边栏的宽度
        rightWidth: 200,  //默认右边栏的宽度
        minWidth: 600,    //默认整个布局最小的宽度
    };

    const datas = Object.assign({}, props, myDefault);

    return (<div className="layout" style={{
        minWidth: datas.minWidth,
    }}>
        <div className={`layout_left ${props.leftClass}`} style={{ width: datas.leftWidth }}>{props.left}</div>
        <main className={`layout_main ${props.minClass}`}>{props.children}</main>
        <div className={`layout_right ${props.rightClass}`} style={{ width: datas.rightWidth }}>{props.right}</div>
    </div>);
};