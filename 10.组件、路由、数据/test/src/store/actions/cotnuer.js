export const actionTypes = {
    asyncIncrease: 'cotnuer_asyncIncrease',
    increase: 'cotnuer_increase',
    asyncReduce: 'cotnuer_asyncReduce',
    reduce: 'cotnuer_reduce'
};


export function createAsyncIncreaseAction(){
       return (dispatch, getState, extra)=>{
            setTimeout(()=>{
              dispatch({
                type: actionTypes.asyncIncrease,
                payload: null
              })
            }, 2000);
       }
};

export function createIncreaseAction(){
  return {
    type: actionTypes.increase,
    payload: null
  }
};

export function createAsyncReduceAction(){
  return {
    type: actionTypes.asyncReduce,
    payload: new Promise((resolve, reject)=>{
            setTimeout(()=>{
              resolve({
                type: actionTypes.asyncReduce,
                payload: null
              })
            }, 2000)
    })
  }
};

export function createReduceAction(){
  return {
    type: actionTypes.reduce,
    payload: null
  }
};