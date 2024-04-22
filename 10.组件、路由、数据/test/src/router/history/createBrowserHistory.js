
import ListenMonitor from './listenMonitor.js';
import BlockManager from './blockManager.js';


/**
 * 
 * @param {*} options 配置对象
 * @returns history 对象
 */
export default function createBrowserHistory(options){
     
     const monitors = new ListenMonitor(); // 监听器实例
     const blocsM = new BlockManager(options.getUserConfirmation || ((msg, callback)=>{
          callback(true);
     })); // 阻塞器实例
     
     window.monitors = monitors

     const history = {
      action: 'POP', // 当前地址栈，最后一次操作的类型
      length: window.history.length, // 地址栈中的数量
      location: createLocation(options.basename), // 当前地址的信息对象
      push(path, state){  // 向当前地址栈，入栈一个地址，同时指针指向该地址
        handleJump(path, state, options.basename, history, blocsM, monitors, 'push');
      },
      replace(path, state){ // 替换当前地址栈中，指针指向的地址
        handleJump(path, state, options.basename, history, blocsM, monitors, 'replace');
      },
      go(offset){  // 控制当前地址栈中，指针的偏移
          
      },
      goBack(){ // 地址栈指针后退一步

      },
      goForward(){ // 地址栈指向前进一步

      },
      listen(monitor){ // 添加一个监听器
           return monitors.addMonitor(monitor);
      },
      block(prompt){ // 设置阻塞
        blocsM.setBlockManager(prompt);
      },
      createHref(){ // 完整的地址

      },
      basename: options.basename ? options.basename : '',

      monitors
     };


     return history;
};


/**
 * 创建 location对象
 * @param {*} basename 跟路径
 */
function createLocation(basename = ''){
   const rex = new RegExp(`${basename}`);
   const pathname = window.location.pathname.replace(rex, '');

   const location = {
     pathname,
     search: window.location.search,
     hash: window.location.hash
   };

   return handleState(location);
};


/**
 * 处理sate属性
 * 用 createXXXHistory创建的history对象里的location中的state属性有如下规则：
 *   如果 window.history中的state为null，则为undefined
 *   如果 window.history中的state有值，且不是对象，则为该值
 *   如果 window.history中的state是对象： 
 *      对象中有key值，则将对象中的key值作为location对象里的key,并且将state值作为location对象里state的值
 *      如果没有key属性，则直接将historyState赋值给state
 * @param {*} location location对象
 */
function handleState(location){
    
    if(window.history.state === null){
       location.state = undefined
    } else if(typeof(window.history.state) === 'object'){
       if('key' in window.history.state){
          location.key = window.history.state.key;
          location.state = window.history.state;
       }else{
          location.state = window.history.state;
       }
    }else if(typeof(window.history.state) !== 'object' || typeof(window.history.state) !== 'undefined'){
       location.state = window.history.state
    };


    return location;
};


/**
 * 进行页面跳转
 * @param {String/Object} path  跳转目标的路径 
 * @param {*} state 附加数据
 * @param {String} basename 跟路径 
 * @param {Object} history 对象 
 * @param {Object} blocsM  阻塞器实例
 * @param {Object} monitors 监听器实例 
 * @param {String} type 跳转类型
 */
function handleJump(path, state, basename = '', history, blocsM, monitors, type){
     
     const newPath = splicingPath(path, basename); // 将路径拼接完整
     
     const obj = {
       key: createKey(6),
       state,
     };

     // 跟进新路径创建 location对象
    const specifyLocation = createSpecifyLocation({...obj, newPath}, basename);
    
    // 触发阻塞
    blocsM.triggerBlocking(specifyLocation, type.toUpperCase(), ()=>{
       
        // 处理监听器
        monitors.triggerListener(specifyLocation, type.toUpperCase());

        // 进行页面无刷新跳转
        if(type === 'push'){
           window.history.pushState(obj, null, newPath);
        }else if(type === 'replace'){
           window.history.replaceState(obj, null, newPath);
        }

        // 修改 history对象的 信息
        history.length = window.history.length; // 更新 地址栈中 长度
        history.location = createLocation(basename);  // 更新 location对象
        history.action = type.toUpperCase(); // 更新 最后一次 跳转方式
    });

};


/**
 * 将 path 拼接完整
 * @param {Object/String} path 地址
 * @param {*} basename 跟路径
 * @returns 完整路径
 */
export function splicingPath(path, basename = ''){
    

    if(typeof(path) === 'string'){ 

       return basename + path

    }else if(typeof(path) === 'object'){

       const { pathname = '', search = '', hash = '' } = path;

       let newPath = basename + pathname;

       if(search.charAt('?') !== 0 && search.length > 0 ){
           newPath += `?${search}`;
       }; 
       if(hash.charAt('#') !== 0 && hash.length > 0){
           newPath += `#${hash}`;
       };

       return newPath;

    };


};


/**
 * 创建指定的 key
 * @param {*} length  长度
 */
function createKey(length){
    return Math.random().toString(36).substr(2,length)
};


/**
 * 创建指定地址的 location对象
 * @param {Object} obj  对象
 * @param {String} basename 跟路径
 * @returns 
 */
export function createSpecifyLocation(obj, basename){
      
      const { newPath, state, key } = obj; 

      const questionIndex = newPath.indexOf('?'); // 第一个问号的索引
      const wellIndex = newPath.indexOf('#'); // 第一个井号的索引

      let search = '';
      let hash = '';

      // 问号是否在井号前面
      if(questionIndex < wellIndex){
         search = newPath.slice(questionIndex);   // 此时的参数 可能带有hash值
      };

      if(wellIndex > 0){
        hash = newPath.slice(wellIndex);
      }; 

      // 如果此时路径带有hash，将其截取掉
      if(questionIndex < wellIndex && wellIndex > 0){
          search = search.slice(0, wellIndex);
      };

      const rex = new RegExp(`${basename}`);
      let pathname = newPath.replace(/[#?].*$/, ""); 
      pathname = pathname.replace(rex, '');

      

      return {
        pathname,
        search,
        hash,
        key,
        state,
      };

};


