import { actionTypes } from '../actions/cotnuer.js';



export default function cotnuerReducer(state = 10, action){
      switch(action.type){
         case actionTypes.asyncIncrease : 
           return state + 1;
         case actionTypes.asyncReduce : 
           return state - 1;
         case actionTypes.increase : 
           return state + 1;
         case actionTypes.reduce : 
           return state - 1;
        default : return state;
      }
}