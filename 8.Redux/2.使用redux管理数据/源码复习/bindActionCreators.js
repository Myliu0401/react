


/**
 * 增强action功能，使其创建action时顺便完成分发
 * @param {Object} actions   存储action创建函数的对象 
 * @param {function} dispatch  分发函数
 */
export default function bindActionCreators(actions, dispatch){

    const plusActions = { }; // 存储增强版的action创建函数

     for(let name in actions){
       plusActions[name] = (...residue)=>{
             const action = actions[name](...residue);

             return dispatch(action)
       }
     };

   
     return plusActions;
     
};