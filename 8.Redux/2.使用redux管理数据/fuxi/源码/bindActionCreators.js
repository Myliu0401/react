


/**
 * 
 * @param {*} actions 
 * @param {*} dispacth 
 */
export default function bindActionCreators(actions, dispacth){
      if(typeof(actions) === 'function'){
         return (...surplus)=>{
            dispacth(actions(...surplus))
         }
      }else if(Object.prototype.toString.call(actions) === '[object Object]'){
          const enhanced = {}; 
          for(let name in actions){
              enhanced[name] = (...surplus)=>{
                  dispacth(actions[name](...surplus))
              }
          }
          return enhanced;
      }else {
          throw new Error('actions 只能是函数或对象');
      }
};