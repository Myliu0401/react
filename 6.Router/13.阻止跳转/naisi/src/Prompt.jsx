import { withRouter } from 'react-router-dom';
import { useEffect } from "react";



/**
 * 跳转时进行提示提示 
 * @param {*} props 属性
 */
export default withRouter(function Prompt(props) {

    let unBlock;

    useEffect(() => {
        //判断是否添加阻塞
        if (props.isTips) {/* props.history.block */
            unBlock = props.history.block(props.tipsMsg);
        };

        return () => {
            unBlock && unBlock();
        }
    });


    return null;
});