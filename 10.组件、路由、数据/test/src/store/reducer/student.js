import { studentActionTypes } from '../actions/student.js';
import Reudx from '../../reudx/index.js';

// 条件的默认数据
const initCondition = {
    page: 1,  // 分页
    sex: -1,  // 性别  -1代表无限  
    limit: 10,  // 页容量
    key: undefined  // 关键字搜索
};


// 数据的默认数据
const initData = {
  isLoading: false,  // 是否加载中
  datas: null,       // 数据
  total: null        // 总数量
};


/**
 * 学生条件的Reducer
 * @param {Object} state     状态 
 * @param {Objbct} action    描述对象
 * @returns 
 */
export function studentConditionReducer(state = initCondition, action){
    switch(action.type){
        case studentActionTypes.setCondition :
          return {
            ...state,
            ...action.payload
          } ;

        default : return state ;
    }
};


/**
 * 学生数据的reducer
 * @param {Object} state    状态
 * @param {Object} action   对象
 */
export function studentDatasReducer(state = initData, action){
       switch(action.type){
           case studentActionTypes.setStudent :
             return {
               ...state,
               ...action.payload
             };

           case studentActionTypes.setIsLoading :
             return {
               ...state,
               isLoading: action.payload
             };

            default : return state ;
       }
};

// 将学生的reducer合并后进行默认导出
export default Reudx.combineReducers( {
  condition : studentConditionReducer,
  result: studentDatasReducer
} );
