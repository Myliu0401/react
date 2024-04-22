import { studentType } from '../../actions/student/student.js'
import { isLoadingType } from '../../actions/student/student.js'

const initDtate = {
  datas: [],
  total: null,
  isLoading:false
}

export default function studentReducer(state = initDtate, action){

      switch(action.type){
           case studentType :
             return {
                ...state,
                datas:action.payload.datas,
                total:action.payload.total
             };
           case isLoadingType :
             return {
                ...state,
                isLoading: action.payload
             };
           default : return state;
      }
}