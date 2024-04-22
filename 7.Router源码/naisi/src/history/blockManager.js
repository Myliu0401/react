

/**
 * 设置阻塞器
 */
export default class BlockManager {
    constructor(getUserConfirmation) {
        this.prompt = null; //提示的消息   该属性是否有值，决定了是否有阻塞
        this.getUserConfirmation = getUserConfirmation;
    };


    /**
     * 设置一个阻塞器
     * @param {function/string} prompt 
     */
    setupBlock(prompt) {
    
        if (typeof (prompt) !== 'string' && typeof (prompt) !== 'function') {
            return;
        }

        this.prompt = prompt;

        //该返回值用于取消阻塞器
        return () => {
            this.prompt = null;
        }
    };

    /**
     * 触发阻塞
     * @param {object} location  目标的location对象  
     * @param {*} action         类型 如： POP等
     * @param {*} callback       回调
     * @returns 
     */
    triggerBlock(location, action, callback) {
      
        //判断是否阻塞   
        if (!this.prompt) {
            callback(); //不阻塞，将其跳转
            return;
        } else if (typeof (this.prompt) === 'string' || typeof (this.prompt) === 'function') {
            const isFunc = typeof (this.prompt) === 'function' ? true : false;
            this.getUserConfirmation(isFunc ? this.prompt(location, action) : this.prompt, (isTrue = false) => {
                isTrue && callback();
            });
        };

    };
};