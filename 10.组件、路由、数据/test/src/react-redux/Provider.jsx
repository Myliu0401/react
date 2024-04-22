
import context from "./context.js";


export default function Provider(props){

     // 上下文生产者
     return (<context.Provider value={props.store}>
       { props.children }
     </context.Provider>);
};