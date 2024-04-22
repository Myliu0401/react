

const configure = {
  namespace: 'counter',
  state: 10,
  reducers: {
    reduce(state){
          return state - 1 
    },
    increase(state){
          return state + 1
    },
  },
  effects: {
    *asyncReduce(action, saga){
         yield saga.call(delay);
         yield saga.put({ type: 'reduce' });
    },
    *asyncIncrease(action, saga){
      yield saga.call(delay);
      yield saga.put({ type: 'increase' });
    }
  },
  subscriptions:{
    resizeIncrease({ dispatch }){
          window.onresize = ()=>{
            dispatch({ type: 'increase' })
          }
    }
  }
};


export default configure;


function delay(duration = 1000){
   return new Promise((resolve)=>{
        setTimeout(()=>{ 
          resolve();
        }, duration);
   });
}; 

