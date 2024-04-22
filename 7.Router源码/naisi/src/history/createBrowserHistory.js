import ListenMonitor from "./listenMonitor.js";
import BlockManager from './blockManager.js';

/**
 * 
 * @param {*} options  配置对象
 */
export default function createBrowserHistory(options = {}) {

    //默认值
    options.getUserConfirmation = options.getUserConfirmation || (options.getUserConfirmation = (msg, callback) => {
        callback(window.confirm(msg));
    });


    const monitors = new ListenMonitor(); //创建一个监听器仓库  类似于vue的事件总线
    const myBlock = new BlockManager(options.getUserConfirmation); //创建一个阻塞器实例


    const history = {
        action: 'POP',
        location: createLocation(options.basename),   //location对象
        length: window.history.length,
        go(num) {
            window.history.go(num);
        },
        goBack(num) {
            window.history.back(num);
        },
        goForward(num) {
            window.history.forward(num);
        },
        push(path, state) {
            historyJump(path, state, options, history, myBlock, monitors, 'push');
        },
        replace(path, state) {
            historyJump(path, state, options, history, myBlock, monitors, 'replace');
        },
        listen(listener) {
            monitors.addMonitor(listener);
        },
        block(prompt) {
            myBlock.setupBlock(prompt);
        },
        createHref(location) {
            return options.basename + location.pathname + location.search + location.hash;
        }

    };


    addDomListener(monitors, myBlock, history, options.basename);  //添加事件

    return history;

};



/**
 * 创建location对象
 * @param {*} basename 根路径
 */
function createLocation(basename = '') {

    const rex = new RegExp(`^${basename}`);  //创建一个正则表达式
    const pathname = window.location.pathname.replace(rex, '');
    const location = {
        hash: window.location.hash,
        pathname,
        search: window.location.search,
    };

    return processState(location);
};


/**
 * 处理sate属性
 * 用 createXXXHistory创建的history对象里的location中的state属性有如下规则：
 *   如果 window.history中的state为null，则为undefined
 *   如果 window.history中的state有值，且不是对象，则为该值
 *   如果 window.history中的state是对象： 
 *      对象中有key值，则将对象中的key值作为location对象里的key,并且将state值作为location对象里state的值
 *      如果没有key属性，则直接将historyState赋值给state
 */
function processState(location) {

    const windowSate = window.history.state;
    if (windowSate === null) {
        location.state = undefined;
    } else if (typeof (windowSate) !== 'object') {
        location.state = windowSate;
    } else {
        if ('key' in windowSate) {
            location.key = windowSate.key;
            location.state = windowSate.state;
        } else {
            location.state = windowSate;
        }
    };

    return location;
};

/**
 * 添加对地址变化的监听
 *  //popstate事件，仅能监听前进、后退、用户对地址hash的改变
 * @param {Object} monitors 实例
 * @param {Object} myBlock  实例
 * @param {Object} history 对象
 * @param {string} basename 根路径
*/
function addDomListener(monitors, myBlock, history, basename) {

    //该事件是地址跳转完毕后才会触发的
    window.addEventListener('popstate', () => {
        const action = 'POP';
        const location = createLocation(basename); //重新创建一个location对象

        //触发阻塞, 因为popstate事件是跳转后触发的，所以在 用户点击 前进 后退按钮是无法阻止不跳转的，所以在这里只能触发监听器而已什么都做不了
        myBlock.triggerBlock(location, action, () => {
            monitors.triggerMonitor(location, action); //触发监听器仓库中的监听器
        });

        history.action = action; //更新类型
        history.location = location; //更新location对象
    });
};




/**
 * 
 * @param {*} path 目标的路径
 * @param {*} state 附加数据
 * @param {*} options createBrowserHistory函数的参数
 * @param {*} history createBrowserHistory函数的返回值
 * @param {object} myBlock 阻塞器实例
 * @param {object} monitors 监听器实例
 * @param {string} type 类型 如：PUSH,POP
 */
function historyJump(path, state, options, history, myBlock, monitors, type) {
    const newPath = handlePathAndState(path, state, options.basename);  //得到对象格式的path

    const obj = {
        key: createKey(),
        state: newPath.state
    };

    const newLocation = targetLocation(newPath, options.basename); //创建目标的location对象

    myBlock.triggerBlock(newLocation, type.toUpperCase(), () => {

        if (type === 'push') {
            window.history.pushState(obj, null, newPath.path);
        } else {
            window.history.replaceState(obj, null, newPath.path);
        };

        //判断跳转时是否强制刷新页面
        if (options.forceRefresh) {
            window.location.href = newPath.path;
        };


        //跳转完毕后才能下面的操作
        history.action = type.toUpperCase(); //修改 history对象中action的类型
        history.length = window.history.length;  //修改 history对象的地址栈的数量
        history.location = createLocation(options.basename); //刷新 history对象中的location对象

        monitors.triggerMonitor(history.location, type.toUpperCase()); //跳转完毕后触发监听器

    });

};


/**
 * 处理 push函数的path参数
 * @param {Object/String} path   路径
 * @param {*} state   附加数据
 * @param {string} basename 根路径
 */
export function handlePathAndState(path, state, basename = '') {

    if (typeof (path) === 'string') {
        return {
            path: basename + path,
            state,
        }
    } else if (typeof (path) === 'object') {
        let newPath = basename + path.pathname;
        let { search = '', hash = '' } = path;  //对path对象进行解构

        if (search.charAt(0) !== '?' && search.length > 0) {
            search = '?' + search;
        };
        if (hash.charAt(0) !== '#' && hash.length > 0) {
            hash = '#' + hash;
        };
        newPath += (search + hash);


        return {
            path: newPath,
            state: path.state
        };
    };


};

/**
 * 
 * @param {object} newPath  目标的路径对象
 * @returns {object}  返回一个location对象
 */
export function targetLocation(newPath, basename = '') {
    const { path, state } = newPath; //解构出来

    const questionIndex = path.indexOf('?'); //第一个问号的位置
    const wellIndex = path.indexOf('#'); //第一个井号的位置


    let search = ''; //参数
    let hash = ''; //hash


    if (questionIndex < wellIndex) {
        search = path.slice(questionIndex);
    };

    if (wellIndex > 0) {
        hash = path.slice(wellIndex);
    };

    //判断 问号是否在井号前面
    if (questionIndex < wellIndex && (wellIndex !== 0 || wellIndex !== -1)) {
        search = path.slice(questionIndex, wellIndex);
        hash = path.slice(wellIndex);

    };

    let pathname = newPath.path.replace(/[#?].*$/, "");
    //处理basename的情况
    let reg = new RegExp(`^${basename}`);
    pathname = pathname.replace(reg, "");


    return {
        hash,
        search,
        pathname,
        state,
    }
};

/**
 * 创建一个key
 * @param {*} length  长度
 */
function createKey(length = 6) {
    return Math.random().toString(36).substr(2, length);
};


