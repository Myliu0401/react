


/**
 * 淡入淡出的过渡组件
 * @param {*} props 属性对象
 */
function FadeTransition(props) {
console.log(props)

    return (<ReactTransitionGroup.CSSTransition {...props} classNames='Fade' onEnter={(node) => {

    }} onEntering={(node) => {
        node.style['transition'] = `all ${props.timeout}ms`;
    }} onEntered={(node) => {
        node.style['transition'] = ``;
    }} onExit={(node) => { }} onExiting={(node) => {
        node.style['transition'] = `all ${props.timeout}ms`;
    }} onExited={(node) => { node.style['transition'] = ``; props.onExited && props.onExited() }}>
        {props.children}
    </ReactTransitionGroup.CSSTransition>);

};

//默认属性
FadeTransition.defaultProps = {
    timeout: 500
};


//属性类型
FadeTransition.propTypes = {
    timeout: PropTypes.number,
    in: PropTypes.bool
};