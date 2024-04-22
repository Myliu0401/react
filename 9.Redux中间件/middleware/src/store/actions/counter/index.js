export const COUNTER_increase = 'COUNTER_increase';
export const COUNTER_reduce = 'COUNTER_reduce';
export const COUNTER_async_increase = 'COUNTER_async_increase';
export const COUNTER_async_reduce = 'COUNTER_async_reduce';


export function createIncreaseAction(){
  return {
    type: COUNTER_increase,
    payload: null
  }
};


export function createReduceAction(){
  return {
    type: COUNTER_reduce,
    payload: null
  }
};


export function createAsyncIncreasAction(){
  return {
    type: COUNTER_async_increase,
    payload: null
  }
}


export function createAsyncIncreasReduce(){
  return {
    type: COUNTER_async_reduce,
    payload: null
  }
};