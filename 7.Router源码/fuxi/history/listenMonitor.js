

/**
 * 监听器
 */
export default class ListenMonitor {
    constructor() {
        this.monitorArr = []; // 存储监听器的数组
    };


    /**
     * 添加监听器
     * @param {Function} listener 
     */
    addListener(listener) {
        if (typeof (listener) !== 'function') {
            return;
        }
        this.monitorArr.push(listener);
        return () => { // 取消该监听器
            this.monitorArr.splice(this.monitorArr.indexOf(listener), 1);
        };
    };


    /**
     * 触发监听器
     * @param {*} location  目标地址的location
     * @param {*} action  跳转的方式
     */
    triggerListener(location, action) {
        for (let i = 0; i < this.monitorArr.length; i++) {
            this.monitorArr[i](location, action);
        };
    };
}