

import { ADDUSER, DELETEUSER, UPDATEUSER } from '../action/usersAction.js';

const initialState = [
  { id:Math.random(), name:'aaa', age: 18 },
  { id:Math.random(), name:'bbb', age: 19 }
]; // 装用户的数据

export default function usersReducer(state = initialState, action){
      switch(action.type){
         case ADDUSER: 
            return state.concat(action.payload);
          
         case DELETEUSER: 
            return state.filter((item)=>{
               return item.id !== action.payload
            });

         case UPDATEUSER: 
            return state.map((item)=>{
                if(item.id === action.payload.id){
                   return {
                     ...item,
                     ...action.payload,
                   }
                };
                return item;
            });

         default: return state;
      }
};