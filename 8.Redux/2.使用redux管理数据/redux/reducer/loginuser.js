
import { LOGIN } from '../action/loginUserAction.js';

const initialState = null

export default function loginReducer(state = initialState , action){
   
     switch(action.type){
            case  LOGIN : 
              return action.payload;

            default: return state;
     }   
};