import { pathToRegexp } from 'path-to-regexp';


/**
 * 用于根据路径规则匹配路径
 * @param {*} path       路径规则
 * @param {*} pathname        路径
 * @param {*} options    匹配对象
 */
export default function matchPath(path, pathname = window.location.pathname, options = {}) {
    const keys = []; //该数组用于填充路径规则里面的键 如 /:id  键就为id
    const regexp = pathToRegexp(path, keys, filterMatchingObjects(options));
    const rules = regexp.exec(pathname);
    
    //没有匹配到的情况下
    if (!rules) {
        return null;
    }

    //匹配到
    return {
        isExact: pathname === rules[0], //是否完全匹配
        params: convertToObject(rules, keys),
        path: path,  //匹配的规则
        url: rules[0], //匹配到的路径
    }

};


/**
 * 根据参数转换成对象 
 * @param {Array} rules   值 
 * @param {Array} keys    键
 */
function convertToObject(rules, keys) {
    const after = Array.from(rules).slice(1); //去除第一项后的数组
    const obj = {};
    for (let i = 0; i < after.length; i++) {
        obj[keys[i].name] = after[i];
    };
    return obj;
};



/**
 * 将传入的react-router配置，转换为path-to-regexp的配置
 * @param {Object} options 匹配对象 
 */
function filterMatchingObjects(options) {
    return {
        sensitive: options.sensitive ? true : false,  //是否区分大小写 默认为false
        strict: options.strict ? true : false, //是否不允许匹配尾随的符号 默认为false 如： /fads/ 
        end: options.exact ? true : false  //是否进行严格匹配
    }
};


