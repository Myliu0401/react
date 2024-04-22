import { searchStudents } from '../../api/index.js'


export const studentActionTypes = {
  setCondition: 'queryStudents',    // 设置条件
  setStudent: 'SZStudent',          // 设置学生
  setIsLoading: 'setIsLoading',     // 设置是否加载中
};

// 创建请求的action
export function createFetchStudentsAction(condition){
       return new Promise(async (resolve, reject)=>{
          const data = await searchStudents(condition)
          resolve(createSetStudentAction(data.datas, data.cont))
       })
};


/**
 * 创建设置学生的action
 * @param {Array} arr 数据
 * @param {Number/String} total 总数
 */
export function createSetStudentAction(arr, total){
     return {
       type: studentActionTypes.setStudent,
       payload: {
          datas: arr,
          total,
       }
     }
};


/**
 * 创建设置条件的action
 * @param {Object} newCondition  条件对象
 */
export function createSetConditionAction(newCondition){
     return {
       type: studentActionTypes.setCondition,
       payload: newCondition
     }
};


/**
 * 创建设置是否加载中的action
 * @param {Boolean} bool 布尔值
 */
export function createSetIsLoadingAction(bool){
     return {
       type: studentActionTypes.setIsLoading,
       payload: bool
     }
};