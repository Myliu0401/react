


export default class BlockManager {
   constructor(getUserConfirmation){
        this.prompt = null; // 阻塞消息
        this.getUserConfirmation = getUserConfirmation; // 阻塞器
   };


   /**
    * 设置阻塞消息
    * @param {Function/String} blockingMessage 阻塞消息
    */
   setBlockManager(blockingMessage){
      this.prompt = blockingMessage;

      // 取消阻塞
      return ()=>{
         this.prompt = null
      };
   };

   

   /**
    * 触发阻塞器
    * @param {*} specifyLocation 指定地址的 location对象
    * @param {*} action 跳转的类型
    * @param {*} func 功能函数 用来 跳转
    */
   triggerBlocking(specifyLocation, action, func){
       // 判断是否有阻塞消息
       if(!this.prompt){
             func(); // 无阻塞的 进行跳转
             return;
       };

      let msg = null;

      if(typeof(this.prompt) === 'function'){
        msg = this.prompt(specifyLocation, action);
      } else {
        msg = this.prompt;
      }

      this.getUserConfirmation(msg, (boolean = false)=>{
           boolean && func(); // 如果为 true 将进行跳转
      });
   };
   
}