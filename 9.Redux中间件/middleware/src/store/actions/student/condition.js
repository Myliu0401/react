export const conditionType = 'conditionType';


export function createConditionAction(condition){
       return {
         type: conditionType,
         payload: condition
       }
}