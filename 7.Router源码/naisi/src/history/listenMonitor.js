

/**
 * 监听器
 */
export default class ListenMonitor {
    constructor() {
        this.monitorArr = []; //创建一个存储监听器的数组
    };


    /**
     * 添加监听器 
     * @param {*} callback 回调，跳转后会执行该回调
     */
    addMonitor(callback) {
        this.monitorArr.push(callback); //添加监听器

        //返回值用于取消对应的监听器
        return () => {
            const callbackIndex = this.monitorArr.indexOf(callback); //获取数组中对应函数的索引
            this.monitorArr.splice(callbackIndex, 1);
        };
    };


    /**
     * 用于触发所有的监听器
     * @param {*} location  新的location对象
     * @param {*} action    跳转的形式
     */
    triggerMonitor(location, action) {
        for (let listener of this.monitorArr) {
            listener(location, action);
        }
    };

};