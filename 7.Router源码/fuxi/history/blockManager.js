

/**
 * 设置阻塞器
 */
export default class BlockManager {
    constructor(getUserConfirmation) {
        this.prompt = null; // 提示的消息   该属性是否有值，决定了是否有阻塞
        this.getUserConfirmation = getUserConfirmation; // 阻塞函数
    };


    /**
     * 设置阻塞器
     * @param {Function/String} prompt 
     */
    setBlocker(prompt) {
        if (typeof (prompt) !== 'function' && typeof (prompt) !== 'string') {
            return
        } else {
            this.prompt = prompt;
            return () => {
                this.prompt = null; // 取消阻塞
            }
        }
    };


    // 触发阻塞
    triggerBlocking(location, action, callback) {
        // 判断是否阻塞
        if (!this.prompt) {
            callback();
            return
        };

        if (typeof (this.prompt) === 'string' || typeof (this.prompt) === 'function') {
            const isFunc = typeof (this.prompt) === 'function' ? true : false;
            this.getUserConfirmation(isFunc ? this.prompt(location, action) : this.prompt, (boolean) => {
                boolean && callback(); // 进行跳转
            })
        }
    };

};