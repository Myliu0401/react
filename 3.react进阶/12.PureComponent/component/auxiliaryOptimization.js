
/**
 * 辅助优化函数  -------- 进行浅比较
 * @param {*} obj1   对象1 
 * @param {*} obj2   对象2
 */
function auxiliary(obj1, obj2) {
    for (let prop in obj1) {
        if (!Object.is(obj1[prop], obj2[prop])) {
            return true; //进行重新渲染
        }
    };

    return false; //不进行重新渲染
};