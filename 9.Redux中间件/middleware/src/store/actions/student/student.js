import { searchStudents } from '../../../services/student.js'

export const studentType = 'studentType';
export const isLoadingType = 'studentTotalType';

export function createisLoadingTypeAction(boolean){
   return {
    type: isLoadingType,
    payload: boolean
   }
};

export function createstudentTypeAction(total,datas){
   return {
     type: studentType,
     payload: {
      total,
      datas
     }
   }
}

// thunk 形式
/* export function fetchStudents(){
   return async (dispatch, getState, extra)=>{
        dispatch(createisLoadingTypeAction(true));
        const data = await searchStudents(getState().student.conditionData);
        dispatch(createstudentTypeAction(data.cont, data.datas));
        dispatch(createisLoadingTypeAction(false));
   }
}; */


// action 为 promise形式
/* export function fetchStudents(conditionData){
     return new Promise(async (resolve, reject)=>{
        const data = await searchStudents(conditionData);
        resolve(createstudentTypeAction(data.cont, data.datas));
     });
}; */



/* export function fetchStudents(conditionData){
  return searchStudents(conditionData).then((data)=>{
      return createstudentTypeAction(data.cont, data.datas);
  });
}; */ 

/* export async function fetchStudents(conditionData){
  const data = await searchStudents(conditionData)
  return createstudentTypeAction(data.cont, data.datas);
};
 */


export function fetchStudents(conditionData){
  return {
    type: studentType,
    payload: searchStudents(conditionData).then((data)=>{
      return {
        total: data.cont,
        datas: data.datas
      };
    })
  }
};



