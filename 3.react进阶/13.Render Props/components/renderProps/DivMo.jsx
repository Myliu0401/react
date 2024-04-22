function DivMo(props) {
    return (<div style={{
        width: 100,
        height: 100,
        backgroundColor: 'antiquewhite',
        position: 'relative',
        left: props.x - 50,
        top: props.y - 50
    }}>
    </div>);
}