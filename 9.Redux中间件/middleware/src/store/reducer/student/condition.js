import { conditionType } from '../../actions/student/condition.js';
const initDtate = {
    page: 1,
    key: undefined,
    sex: -1,
    limit: 10
};

export default function conditionReducer(state = initDtate, action){
    switch(action.type){
           case conditionType :
             return {
               ...state,
               ...action.payload
             };
           default : return state;
    }
}