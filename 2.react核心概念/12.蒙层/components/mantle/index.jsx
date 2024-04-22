function Mantle(props) {
    const obj = {
        ...props,
        bg: props.bg || 'rgba(200,200,200,0.6)', //背景颜色
    };


    return (<div className="mantle" style={{ backgroundColor: obj.bg }} onClick={(event) => {
        if (event.target.classList.contains('mantle')) {
            obj.myClose();
        }
    }}>
        <div className="mantle-center">{props.children}</div>
    </div>)
};