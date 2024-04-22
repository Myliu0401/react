import React from 'react';
import { store } from '../store/index.js';
import { createAsyncIncreaseAction, createIncreaseAction, createAsyncReduceAction, createReduceAction } from '../store/actions/cotnuer.js';
// import { connect } from 'react-redux';
import reactRedux from '../react-redux/index.js'

const connect = reactRedux.connect;

// 展示组件
function Cotnuer(props){
 return (
  <div>
   <h3>{ props.number }</h3>
   <div>
     <button onClick={props.onAsyncIncrease}>async 增加</button>
     <button onClick={props.onIncrease}>增加</button>
     <button onClick={props.onAsyncReduce}>async 减少</button>
     <button onClick={props.onReduce}>减少</button>
   </div>
 </div>);
};

/**
 * 将整个仓库的状态，映射成当前组件需要的数据
 * @param {*} state 
 */
function mapStateToProps(state){
   return {
     number: state.cotnuer
   }
};

function mapDispatchToProps(dispatch){
   return {
    onAsyncIncrease(){
      dispatch(createAsyncIncreaseAction())
    },
    onIncrease(){
      dispatch(createIncreaseAction())
    },
    onAsyncReduce(){
      dispatch(createAsyncReduceAction())
    },
    onReduce(){
      dispatch(createReduceAction())
    }
   }
};

//容器组件
/* export default class CounterContainer extends React.Component {
  constructor(props){
       super(props);
       this.state = mapStateToProps(store.getState());
       this.cancelMonitor = store.subscribe(()=>{
            this.setState(mapStateToProps(store.getState()))
       });
  };
  render() {
       return <Cotnuer {...this.state} {...mapDispatchToProps(store.dispatch)}></Cotnuer>
  }
};
 */

const createActions = {
  onAsyncIncrease: createAsyncIncreaseAction,
  onIncrease: createIncreaseAction,
  onAsyncReduce: createAsyncReduceAction,
  onReduce: createReduceAction
}

/* export default connect(mapStateToProps, mapDispatchToProps)(Cotnuer); */


export default connect(mapStateToProps, createActions)(Cotnuer);

