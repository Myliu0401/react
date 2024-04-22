import { connect } from "./dva";

function Counter(props){
     return (<div>

           <h2>{ props.number }</h2>
          <div>
            <button onClick={props.onAsyncReduce}>异步减少</button>
            <button onClick={props.onReduce}>减少</button>
            <button onClick={props.onIncrease}>增加</button>
            <button onClick={props.onAsyncIncrease}>异步增加</button>
          </div>

     </div>);
};


function mapStateToProps(state){
   return { 
    number: state.counter 
  };
};


function mapDispatchToProps(dispatch){
    return {
      onReduce(){
        dispatch({type: 'counter/reduce'});  
      },
      onIncrease(){
        dispatch({type: 'counter/increase'});  
      },
      onAsyncReduce(){ 
        dispatch({ type: 'counter/asyncReduce' });
      },
      onAsyncIncrease(){
        dispatch({ type: 'counter/asyncIncrease' });
      }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);