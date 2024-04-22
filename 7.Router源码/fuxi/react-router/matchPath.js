
import { pathToRegexp } from 'path-to-regexp';



/**
 * 生成一个对象
 * @param {String} pathRules 路径规则
 * @param {String} path      目标路径
 * @param {Object} options   选项    
 * @returns 
 */
export default function matchPath(pathRules = '/', path = '/', options = {}, basename = ''){
     
     const keys = [];
    
     const rgx = pathToRegexp(pathRules, keys, correctionOptions(options)); // 生成一个正则表达式

     const rules = rgx.exact(path);

     if(!rules){
        return null;
     };

     const rgx1 = new RegExp(`^${basename}`);

     const path = rules[0];

     path.replace(rgx1, '');

     return {
        isExact: rules[0] === path, // 是否完全匹配
        params: generateParameters(rules, keys),  // 参数
        path: pathRules, // 匹配规则
        url: path // 匹配路径
     }
};


/**
 * 纠正选项
 * @param {Object} options 
 */
function correctionOptions(options = {}){
    return {
        sensitive: options.sensitive ? true : false,  //是否区分大小写 默认为false
        strict: options.strict ? true : false, //是否不允许匹配尾随的符号 默认为false 如： /fads/ 
        end: options.exact ? true : false  //是否进行严格匹配
    }
};


/**
 * 生成参数
 * @param {Array} rules 
 * @param {Array} keys 
 */
function generateParameters(rules = [], keys = []){
   const newRules =  Array.from(rules).slice(1); // 去除第一项 

   const params = {};

   for(let i = 0; i < newRules.length; i++){
       params[keys[i].name] = newRules[i];
   };

   return params;
};