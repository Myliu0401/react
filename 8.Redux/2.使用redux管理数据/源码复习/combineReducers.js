

/**
 * 处理器对象
 * @param {Object} reducers   存储处理器的对象 
 */
export default function combineReducers(reducers) {
    return (state, action) => {

        const handleReducers = (reducers, state) => {
            const newState = {};
            for (let name in reducers) {
                newState[name] = Object.prototype.toString.call(reducers[name]) === '[object Object]' ?
                    handleReducers(reducers[name], state[name]) :
                    reducers[name](state[name], action);
            }

            return newState;
        };

      return handleReducers(reducers, state);
    };
};