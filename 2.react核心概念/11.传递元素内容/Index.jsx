function MyIndex(props) {
    return (<div>{
        props.children || 'children'
    }{
            props.conter || 'conter'
        }</div>);
};