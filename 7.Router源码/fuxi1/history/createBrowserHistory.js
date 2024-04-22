

import ListenMonitor from "./listenMonitor";
import BlockManager from "./blockManager";


/**
 * 创建一个history对象
 * @param {*} options 
 */
export default function createBrowserHistory(options = {}) {

    const listenMonitor = new ListenMonitor();
    const blockManager = new BlockManager(options.getUserConfirmation || ((message, callback) => { callback(true) }));


    const history = {
        action: 'POP', // 进入该地址的方式  'POP 表示出栈   PUSH表示入栈  REPLACE表示替换'
        length: window.history.length, // 当前历史记录栈的数量
        basePath: options.basename || '', // 基路径
        location: createCurrentLocation(options.basename), // 记录了当前地址的相关信息
        listen(callback) { // 添加一个监听器
            return listenMonitor.addListener(callback)
        },
        block(message) { // 设置一个阻塞器
            return blockManager.setBlocking(message);
        },
        createHref: getFullPath,  // 获取完整的url路径，必须传入当前的location对象
        push(path, data) { // 表示入栈
            jumpRoute.call(history, location, path, data, listenMonitor, blockManager, 'PUSH'); // 跳转路由
        },
        replace(path, data) { // 表示替换
            jumpRoute.call(history, location, path, data, listenMonitor, blockManager, 'REPLACE'); // 跳转路由
        },
        go(num = 1){ // 表示前进  如点击前进按钮
            jumpRoute.call(history, location, path, data, listenMonitor, blockManager, 'POP', num); // 跳转路由
        }, 
        goBack(num = -1){ // 表示后退  如点击后退按钮
            jumpRoute.call(history, location, path, data, listenMonitor, blockManager, 'POP', num); // 跳转路由
        }, 
        goForward(num = 1){ // 表示前进或后退
            jumpRoute.call(history, location, path, data, listenMonitor, blockManager, 'POP', num); // 跳转路由
        }, 
    };

    addForwardAndBackward(history, listenMonitor, blockManager); // 添加点击前进后退事件

    return history;
};


/**
 * 创建一个当前地址的location对象
 * @param {String} basePath 基路径
 * @returns 
 */
function createCurrentLocation(basePath) {

    const rgx = new RegExp(`^${basePath}`); // 创建一个以基路径开头的正则表达式

    const location = {
        hash: window.location.hash, // 当前地址的hash
        key: undefined,
        pathname: window.location.pathname.replace(rgx, ''), // 将基路径去掉，仅保留基路径外的地址
        search: window.location.search, // 参数 
        state: undefined,
    };

    handleState(location); // 该处理会对state属性进行填充

    return location;
};


/**
 * 处理location的state属性
 * @param {Object} location
 * 用 createXXXHistory创建的history对象里的location中的state属性有如下规则：
   如果 window.history中的state为null，则为undefined
   如果 window.history中的state有值，且不是对象，则为该值
   如果 window.history中的state是对象： 
   对象中有key值，则将对象中的key值作为location对象里的key,并且将state值作为location对象里state的值
   如果没有key属性，则直接将historyState赋值给state  
 * @returns 
 */
function handleState(location) {
    const state = window.history.state;
    if (state === null) {
        location.state = undefined;
    } else if (Object.prototype.toString.call(state) === '[object Object]') {
        if ('key' in state) {
            location.key = state.key
        };

        location.state = state;

    } else if (state) {
        location.state = state;
    }
};


/**
 * 获取完整路径
 * @param {Object} location  当前location对象
 * @returns 
 */
function getFullPath(location = {}) {
    return location.basePath + location.pathname + location.search + location.hash;
};


/**
 * 跳转路由
 * @param {*} location 
 * @param {*} path 
 * @param {*} state 
 * @param {*} listenMonitor 
 * @param {*} blockManager 
 * @param {*} action 
 */
function jumpRoute(location, path, state, listenMonitor, blockManager, action, num) {
    const objPath = handlePath(this.basePath, path, state); // 将路基变成对象
    const targetLocation = createTargetLocation(objPath, this.basePath); // 创建目标路径的location

    blockManager.triggerBlocking(targetLocation, action, () => {

        const obj = { key: targetLocation.key, state: targetLocation.state };

        listenMonitor.triggerListener(targetLocation, action); // 触发监听器

        // 跳转路由
        if (action === 'PUSH') {
           window.history.pushState(obj, null, objPath.fullPath);
        } else if (action === 'REPLACE') {
           window.history.replaceState(obj, null, objPath.fullPath);
        }else if(action === 'POP'){
           window.history.go(num);
        }

        // 修改history信息
        this.action = action;
        this.location = createCurrentLocation(this.basePath);
        this.length = window.history.length;

    });
};

/**
 * 处理地址，将地址变成一个对象
 * @param {String} basePath  基地址
 * @param {*} path  跳转目标地址 
 * @param {*} state 附带的状态数据
 */
function handlePath(basePath, path, state) {
    const obj = {
        fullPath: null, // 完整路径
        state
    };
    if (typeof (path) === 'string') {

        obj.fullPath = basePath + path;
    } else if (Object.prototype.toString.call(path) === '[object Object]') {
        const { search = '', hash = '' } = path;

        search.charAt(0) !== '?' && (search = `?${search}`);

        hash.charAt(0) !== '#' && (hash = `#${hash}`);

        obj.fullPath = basePath + path + path.search + path.hash
    };


    return obj;
};

/**
 * 创建目标地址的location
 * @param {Object} objPath 目标地址对象
 * @param {String} basePath 基路径
 * @returns 
 */
function createTargetLocation(objPath = {}, basePath = '') {

    const hashIndex = objPath.fullPath.indexOf('#');

    const hash = hashIndex > -1 ? objPath.fullPath.slice(hashIndex) : undefined;

    const searchIndex = objPath.fullPath.indexOf('?');

    const search = searchIndex < hashIndex ? objPath.fullPath.slice(searchIndex, hashIndex) : undefined;

    const rgx = new RegExp(`^${basePath}`);

    const pathname = objPath.fullPath.replace(rgx, '');

    const location = {
        hash, // 目标路径的hash
        key: createKey(),
        pathname,
        search, // 参数 
        state: objPath.state
    };


    return location;
};


/**
 * 创建随机key
 * @param {Number} length 长度
 * @returns 
 */
function createKey(length = 6) {
    return Math.random().toString(36).substr(2, length);
};


/**
 * 监听点击前进后退按钮事件
 * @param {*} history 
 * @param {*} listenMonitor 
 * @param {*} blockManager 
 */
function addForwardAndBackward(history, listenMonitor, blockManager){
     window.addEventListener('popstate', ()=>{
          
          const location = createCurrentLocation(history.basePath);

          blockManager.triggerBlocking(location, 'POP', ()=>{
            listenMonitor.triggerListener(location, 'POP');

            history.action = 'POP';
            history.location = location;
            history.length = window.history.length;
          });
     }); 
};