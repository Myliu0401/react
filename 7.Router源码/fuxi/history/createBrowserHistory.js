

import BlockManager from "./blockManager";
import ListenMonitor from "./listenMonitor";


/**
 * 创建一个history对象
 * @param {Object} options  配置对象
 * @returns 
 */
export default function createBrowserHistory(options = {}) {

    options.getUserConfirmation || (options.getUserConfirmation = (blockMes, callback) => { callback(true) })

    const listenExample = new ListenMonitor();  // 创建一个监听器实例
    const blockExample = new BlockManager(options.getUserConfirmation); // 创建一个阻塞器实例

    const history = {
        action: 'POP',  // 当前地址栈，最后一次操作的类型, 首次为pop
        location: createCurrentLocation(options.basename),   // 当前地址的信息
        length: window.history.length, // 当前栈中的地址数量
        basename: options.basename,
        push(path, state) { // 向当前地址栈，入栈一个地址，同时指针指向该地址
            historyJump(path, state, listenExample, blockExample, history, options.basename, 'push');
        },
        replace(path, state){
            historyJump(path, state, listenExample, blockExample, history, options.basename, 'replace');
        },
        go(num = 0){
            jumpAssignment(path, state, listenExample, blockExample, history, options.basename, 'pop', num);
        },
        goBack(num = -1){
            jumpAssignment(path, state, listenExample, blockExample, history, options.basename, 'pop', num);
        },
        goForward(num = 1){
            jumpAssignment(path, state, listenExample, blockExample, history, options.basename, 'pop', num);
        },
        listen(listener){
           return listenExample.addListener(listener);
        },
        block(prompt){
           return blockExample.setBlocker(prompt);
        },
        createHref(location = {}) {  // 获取完整的url路径，必须传入当前的location对象
            return options.basename + location.pathname + location.search + location.hash;
        }
    };

    addDomListener(listenExample, blockExample, history, options.basename);

    return history;

};

/**
 * 创建当前地址的location对象
 * @param {*} basename  默认的根路径 
 */
function createCurrentLocation(basename = '') {

    const reg = new RegExp(`^${basename}`); // 创建一个正则表达式
    const pathname = window.location.pathname.replace(reg, ''); // 将匹配到的去掉

    const location = {
        pathname,
        hash: window.location.hash, // 哈希
        search: window.location.search  // 数据
    };

    return handleState(location);
};



/**
 * 处理location的状态数据
 * 用 createXXXHistory创建的history对象里的location中的state属性有如下规则：
 *   如果 window.history中的state为null，则为undefined
 *   如果 window.history中的state有值，且不是对象，则为该值
 *   如果 window.history中的state是对象： 
 *      对象中有key值，则将对象中的key值作为location对象里的key,并且将state值作为location对象里state的值
 *      如果没有key属性，则直接将historyState赋值给state
 * @param {Object} location 
 */
function handleState(location) {

    const state = window.history.state

    if (state === null) {
        location.state = undefined;
    } else if (state) {
        const isObject = Object.prototype.toString.call(state) === '[object Object]';
        if (isObject) {

            if ('key' in state) {
                location.key = state.key;
                location.state = state;
            } else {
                location.state = state;
            }

        } else {
            location.state = state;
        }
    };

    return location;
};



/**
 * 跳转路由
 * @param {String} path  跳转的路径 
 * @param {*} state   状态
 * @param {*} listenExample  监听器实例 
 * @param {*} blockExample   阻塞器实例
 * @param {*} history        history对象
 * @param {*} basename       根路径
 * @param {*} action         跳转的形式
 */
function historyJump(path, state, listenExample, blockExample, history, basename, action, num = 0) {
    const pathObj = handlePathAndState(path, state, basename);
    const location = createTargetLocation(pathObj, basename); // 创建指定的location

    // 触发阻塞
    blockExample.triggerBlocking(location, action.toUpperCase(), () => {
        const obj = { key: location.key, state: location.state };
        
        // 跳转路由
        if (action === 'push') {
            window.history.pushState(obj, null, pathObj.path);
        } else if(action === 'replace'){
            window.history.replaceState(obj, null, pathObj.path);
        }else if(action === 'pop'){
            window.history.go(num);
        };

        
        history.action = action.toUpperCase();
        history.length = window.history.length;
        history.location = createCurrentLocation(basename);

        // 触发监听器
        listenExample.triggerListener(location, action.toUpperCase());
    });
};


/**
 * 得到对象格式的path，对象中拥有完整的url
 * @param {*} path 
 * @param {*} state 
 * @param {*} basename 
 */
export function handlePathAndState(path, state, basename) {
    if (typeof (path) === 'string') {
        return {
            path: basename + path,
            state
        }
    } else if (Object.prototype.toString.call(path) === '[object Object]') {
        const newPath = basename + path.pathname;
        const { search = '', hash = '' } = path;

        if (search.charAt(0) !== '?' && search.length > 0) {
            search = '?' + search;
        };

        if (hash.charAt(0) !== '#' && hash.length > 0) {
            hash = '#' + hash;
        };

        const url = newPath + search + hash;

        return {
            path: url,
            state: path.state
        }
    }
};


/**
 * 创建目标地址的location
 * @param {Object} pathObj 
 * @param {String} basename 
 */
export function createTargetLocation(pathObj = {}, basename = '') {
    const rgx = new RegExp(`^${basename}`);

    const questionIndex = path.indexOf('?');
    const wellIndex = path.indexOf('#');

    let search = ''; // 数据
    let hash = ''; // hash

    // 判断有没有数据
    if (questionIndex < wellIndex) {
        search = pathObj.path.slice(questionIndex)
    };

    // 判断有没有hash
    if (wellIndex > 0) {
        hash = pathObj.path.slice(wellIndex)
    };

    // 问号是否在井号前面
    if ((questionIndex < wellIndex) && (wellIndex !== 0 || wellIndex !== -1)) {
        search = search.slice(0, questionIndex);
    };

    let pathname = pathObj.path.replace(/[#?].*$/, ""); // 将带有#?和后面的数据去掉
    pathname.replace(rgx, ''); // 得到想要的路径

    return {
        pathname,  // 路径
        search, // 数据
        hash,  // 哈希
        key: createKey(),  // key值
        state: pathObj.state // 状态
    }


};


// 创建指定长度的key
function createKey(length = 6) {
    return Math.random().toString(36).substr(2, length);
};

/**
 * 添加进退按钮点击事件
 * @param {*} listenExample 
 * @param {*} blockExample 
 * @param {*} history 
 * @param {*} basename 
 */
function addDomListener(listenExample, blockExample, history, basename){
         //该事件是地址跳转完毕后才会触发的
         window.addEventListener('popstate', ()=>{
              const action = 'POP';
              const location =  createCurrentLocation(basename);
             
              blockExample.triggerBlocking(location, action, ()=>{
                   listenExample.triggerListener(location, action);
              });

              history.action = action;
              history.location = location;

         });
};


/**
 * 当前地址栈指针偏移
 * @param {*} path 
 * @param {*} state 
 * @param {*} listenExample 
 * @param {*} blockExample 
 * @param {*} history 
 * @param {*} basename 
 * @param {*} action 
 * @param {*} num 
 * @returns 
 */
function jumpAssignment(path, state, listenExample, blockExample, history, basename, action, num){
    if(!num){
        return;
    };

    historyJump(path, state, listenExample, blockExample, history, basename, action, num);
};