
/**
 * 提交按钮函数组件
 */
function FromButton(props) {

  

    return (<fromCtx.Consumer>
        {(context) => {
            return (<button onClick={() => {
                context.fromData.submit && context.fromData.submit();
            }}>
                {props.text}
            </button>);
        }}
    </fromCtx.Consumer>);

};

//属性类型检测
FromButton.propTypes = {
    text: PropTypes.string.isRequired,
};



//属性默认值
FromButton.defaultProps = {
    text: '提交'
};



