import actionType from "./actionType.js";


export default {

  // 创建增加的action
  createIncrease(){
      return {
          type: actionType.INCREASE,
          payload: ''
      }
  },

  // 创建减少的action
  createReduce(){
      return {
        type: actionType.REDUCE,
        payload: ''
      }
  },


  // 创建修改的action
  createSet(newNumber){
    return {
       type: actionType.SET,
       payload: newNumber
    }
  }
}