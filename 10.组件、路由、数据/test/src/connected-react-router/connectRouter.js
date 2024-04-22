
import { LOCATION_CHANGE } from './actionTypes.js'
 
/**
 * 用于创建一个router和reducer
 * @param {Object} history  对象
 */
export default function connectRouter(history){
      
       const initial = {
           action: history.action,
           location: history.location
       }

       return (state = initial, action)=>{
            switch(action.type){
               case LOCATION_CHANGE : 
                return action.payload;
                
               default : return state ;
            }
       }
};