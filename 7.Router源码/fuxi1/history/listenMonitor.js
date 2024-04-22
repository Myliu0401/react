

export default class ListenMonitor{
    constructor(){
          this.listenmMonitors = []; // 用于存储监听器
    };


    /**
     * 添加监听器
     * @param {Function} callback 
     */
    addListener(callback){
         if(typeof(callback) !== 'function'){
            return
         };

         this.listenmMonitors.push(callback);

         return ()=>{ // 取消监听器
           const index = this.listenmMonitors.findIndex((func)=>{ return func === callback });
           this.listenmMonitors.splice(index, 1);
         }
    };


    /**
     * 触发监听器
     * @param {Object} location   目标地址的location 
     * @param {String} action     触发的方式 如:push
     */
    triggerListener(location, action){
        this.listenmMonitors.forEach((callback)=>{
            callback(location, action)
        });
    };
}