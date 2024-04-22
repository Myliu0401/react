


export default class BlockManager {
  constructor(getUserConfirmation) {
    this.blocking = null; // 阻塞消息
    this.getUserConfirmation = getUserConfirmation; // 函数
  };


  /**
   * 设置阻塞 
   * @param {*} blocking 
   */
  setBlocking(blocking) {
    this.blocking = blocking;
  };


  /**
   * 触发阻塞
   * @param {Object} location  跳转目标的location
   * @param {String} action 入栈方式
   * @param {Function} callback 
   */
  triggerBlocking(location, action, callback) {
       // 修改阻塞消息
       this.blocking = typeof(this.blocking) === 'function' ? this.blocking(location, action) : this.blocking;
  
       this.getUserConfirmation(this.blocking, (boolean)=>{ boolean && callback() });
  
  };

}