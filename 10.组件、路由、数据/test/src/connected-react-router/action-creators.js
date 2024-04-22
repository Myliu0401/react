
import { LOCATION_CHANGE, CALL_HISTORY_METHOD } from './actionTypes.js';


export function createLocationChangeAction(action, location){
      return {
        type: LOCATION_CHANGE,
        payload: {
          action,
          location
        }
      }
};

export function push(...ags){
   return {
       type: CALL_HISTORY_METHOD,
       payload: {
        method: 'push',
        ags
       }
   }
};



export function replace(...ags){
    return {
      type: CALL_HISTORY_METHOD,
      payload: {
        method: 'replace',
        ags
      }
    }
};