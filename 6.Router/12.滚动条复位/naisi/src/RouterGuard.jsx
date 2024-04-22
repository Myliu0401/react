import React from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';


class _GuardHelper extends React.Component {
    constructor(props) {
        super(props);
    };

    //渲染完成时执行
    componentDidMount() {

        //判断是否监听地址变化
        if (this.props.isMonitor) {
            //添加一个监听器
            this.cancelListening = this.props.history.listen((location, action) => {
                this.props.onChange && this.props.onChange(this.props.location, location, action, this.cancelListening);
            });
        };

        //判断是否进行阻塞
        if (this.props.isBlock) {
            this.unblock = this.props.history.block((location, action) => {
                this.props.iFon && this.props.iFon(this.props.location, location, action);
                return typeof (this.props.blockNews) === 'function' ? this.props.blockNews(location, action) : this.props.blockNews;
            }); //设置一个阻塞器
        };


    };

    //组件销毁时执行
    componentWillUnmount() {
        this.cancelListening(); //取消监听
        this.unblock(); //取消阻塞
    }


    render() {
        return null;
    }
};


const MyGuardHelper = withRouter(_GuardHelper);


export default class RouterGuard extends React.Component {
    constructor(props) {
        super(props);
    };

    /**
     * 设置信息
     * @param {*} frontLocation 跳转前的 location 对象
     * @param {*} afterLocation 跳转目标的 location 对象
     * @param {*} action  进入地址的形式  入栈/出栈/替换
     */
    iFon = (frontLocation, afterLocation, action) => {
        this.frontLocation = frontLocation;
        this.afterLocation = afterLocation;
        this.action = action;
    };


    render() {
        return (<Router getUserConfirmation={(msg, commit) => {

            this.props.handleConfirm ? this.props.handleConfirm(this.frontLocation, this.afterLocation, this.action, msg, commit) : commit(true);
        }} >
            <MyGuardHelper iFon={this.iFon} isMonitor={this.props.isMonitor} isBlock={this.props.isBlock} onChange={this.props.onChange} blockNews={this.props.blockNews}></MyGuardHelper>
            {this.props.children}
        </Router>);
    };
};