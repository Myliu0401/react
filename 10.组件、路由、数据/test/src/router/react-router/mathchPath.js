

import { pathToRegexp } from 'path-to-regexp';

window.pathToRegexp = pathToRegexp

/**
 * 根据路径规则匹配路径
 * @param {String} path 路径规则 
 * @param {String} pathname 当前页面路径
 * @param {Object} options 配置对象
 */
export default function matchPath(path = '/', pathname = window.location.pathname, options = {}){
    
    const keys = []; // 用来装匹配的规则数据 如： /:id 数组项 就为 捕获组

    const rex = pathToRegexp(path, keys, conversion(options)); // 根据路径规则生成 正则表达式
 
    const routs = rex.exec(pathname);

    // 没有匹配到
    if(!routs){
       return null;
    };

    return {
      isExact: routs[0] === pathname, // 地址栏的地址和路由匹配的路径是否完全一致
      params: assemblyParameters(routs, keys), // 路径规则中对应的数据
      path: path, // 匹配规则
      url:routs[0] // 匹配到的路径
    }

};



/**
 * 装参数转换成 pathToRegexp库 所需要的参数
 * @param {Object} options  配置对象 
 */
function conversion(options = {}){
   return {
     sensitive: options.sensitive ? true : false, //  是否区分大小写 默认为 false
     strict: options.strict ? true : false,  // 是否不允许匹配尾随符号 如 /aa/  默认为false
     end: options.exact ? true : false, // 是否进行严格匹配 默认为false
   }
};



/**
 * 组装参数
 * @param {Array} routs 路由规则匹配到的数据 如 /abc/:id   [{id:xxx}] 
 * @param {Array} keys 
 */
function assemblyParameters(routs, keys){
    
    const obj = {};
    const arr = Array.from(routs).slice(1);

    for(let i=0; i<arr.length; i++){
         obj[keys[i].name] = arr[i]
    };

    return keys.length ? obj : null;
};

