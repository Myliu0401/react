


/**
 * 
 * @param {Object} reducers 
 */
export default function combineReducers(reducers) {


    verification(reducers)

    return (state = {}, action) => {
        const newState = {};

        for (let name in reducers) {
            newState[name] = reducers[name](state[name], action)
        };

        return newState;
    }

};


/**
 *  
 * @param {*} reducers 
 */
function verification(reducers) {
    if (Object.prototype.toString.call(reducers) === '[object Object]') {
        throw new Error('参数必须是一个对象');
    };

    if (Object.getPrototypeOf(reducers) !== Object.prototype) {
        throw new Error('参数必须是一个平面对象');
    };

    for (let name in reducers) {
        const reducer = reducers[name];

        let state = reducer(undefined, { type: `@@redux/INIT${Math.random().toString(36).substr(2, 6).split("").join(".")}` });

        if (state === undefined) {
            throw new Error(`${name}函数 返回的状态不能是 unedfined`);
        };

        // 这次验证防止硬编码
        state = reducer(undefined, {
            type: `@@redux/PROBE_UNKNOWN_ACTION${Math.random().toString(36).substr(2, 6).split("").join(".")}`,
        });
    };
};