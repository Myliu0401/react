
/**
 * 生成一个最小数到最大数这个区间的数
 * @param {*} max  最大数
 * @param {*} min  最小数
 */
function random(max,min){
        return Math.ceil(Math.random() * (max-min) + min)
};