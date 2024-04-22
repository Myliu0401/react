import Tween from './tween.js';

/**
 * 复位数字
 * @param {*} options 配置对象
 */
export default function resetScroll({ currentValue, targetValue, mode = 'linear', time = 1000, callback }) {

    const difference = targetValue - currentValue; //差值

    const frequency = Math.ceil(time / 16.7);  //总次数

    let currentTimes = 0; //当前次数

    const number = setInterval(() => {

        if (currentTimes >= frequency || currentValue == targetValue) {
            clearInterval(number);
        };
        callback(Tween[mode](currentTimes, 0, difference, frequency));
        currentTimes++;

    }, 16.7);

    return number; //返回计时器编号

};