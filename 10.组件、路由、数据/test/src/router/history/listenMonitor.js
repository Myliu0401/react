


export default class ListenMonitor {
  constructor(){
      this.containerMonitors = [];
  };


  // 添加监听器
  addMonitor(monitor){
      this.containerMonitors.push(monitor); // 添加监听器 

      // 取消某个监听器
      return ()=>{
        const index = this.containerMonitors.indexOf(monitor);
        index !== -1 && this.containerMonitors.splice(index,1);  
      };
  };

  triggerListener(location, action){
    this.containerMonitors.forEach((monitor)=>{
      monitor(location, action);
    });
  };
}