export default class App extends React.Component 
{ 
state = {count: 0 } 
increment = () => {
console.log('increment setState前的count', this.state.count)
this.setState({count: this.state.count + 1 });
console.log('increment setState后的count', this.state.count) 
} 


triple = () => {
  console.log('triple setState前的count', this.state.count)
  this.setState({count: this.state.count + 1 });
  this.setState({count: this.state.count + 1 });
  this.setState({count: this.state.count + 1 });
  console.log('triple setState后的count', this.state.count) 
} 
reduce = () => { 
  setTimeout(() => {
    console.log('reduce setState前的count', this.state.count)
    this.setState({count: this.state.count - 1 });
    console.log('reduce setState后的count', this.state.count) 
  }, 0); 
  }
  render(){
    return <div><button onClick={this.increment}>点我增加</button>
    <button onClick={this.triple}>点我增加三倍</button>
    <button onClick={this.reduce}>点我减少</button></div> 
    }
}



this.setState({count: this.state.count + 1 ===> shouldComponentUpdate->componentWillUpdate->render->componentDidUpdate});
this.setState({count: this.state.count + 1 ===> shouldComponentUpdate->componentWillUpdate->render->componentDidUpdate});
this.setState({count: this.state.count + 1 ===> shouldComponentUpdate->componentWillUpdate->render->componentDidUpdate});


this.setState({count: this.state.count + 1 ===> 入队，[count+1的任务]});
this.setState({count: this.state.count + 1 ===> 入队，[count+1的任务，count+1的任务]});
this.setState({count: this.state.count + 1 ===> 入队, [count+1的任务，count+1的任务, count+1的任务]}); 
↓ 合并 state，[count+1的任务] 
↓ 执行 count+1的任务



var RESET_BATCHED_UPDATES = {
  initialize: emptyFunction, // 该函数会把锁，先锁上
  close: function () { ReactDefaultBatchingStrategy.isBatchingUpdates = false; }
};
var FLUSH_BATCHED_UPDATES = {
  initialize: emptyFunction,
  close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)
};
var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES];

                                              // 事件类型      事件处理函数
ReactEventListener.jsdispatchEvent: function (topLevelType, nativeEvent){
  //...
  try {// 处理事件 
    ReactUpdates.batchedUpdates(handleTopLevelImpl, bookKeeping); // 该函数会将isBatchingUpdates 设置为true
  } finally { 
    TopLevelCallbackBookKeeping.release(bookKeeping); 
  }

}


// 可以比如成这样
increment = () => {// 进来先锁上 
  isBatchingUpdates = true console.log('increment setState前的count', this.state.count)
  this.setState({count: this.state.count + 1 });
  console.log('increment setState后的count', this.state.count)
  // 执行完函数再放开 
  isBatchingUpdates = false
}很明显，在 isBatchingUpdates 的约束下，setState 只能是异步的。而当 setTimeout 从中作祟时，事情就会发生一点点变化

// 可以比如成这样
reduce = () => { // 进来先锁上 
  isBatchingUpdates = true 
  setTimeout(() => {
  console.log('reduce setState前的count', this.state.count)
  this.setState({count: this.state.count - 1 });
  console.log('reduce setState后的count', this.state.count) 
},0);
// 执行完函数再放开 
isBatchingUpdates = false
}