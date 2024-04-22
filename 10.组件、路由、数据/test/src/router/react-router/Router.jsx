
import { useState, useEffect } from "react";
import RouterContext from './routerContext.js';
import matchPath from "./mathchPath.js";

export default function Router(props){

   /**
    * location 为当前地址的location对象
    */
   const [location, setLocation] = useState(props.history.location);

 

   useEffect(()=>{

    const unListen = props.history.listen((location, action)=>{
      setLocation(location) //刷新location跟更新组件
    });
   
     return unListen; //取消监听

   }, []);

   return (<RouterContext.Provider value={{
     history:props.history, // history对象，该对象中含有api进行跳转和控制地址栈
     location, // 当前的地址的 location对象
     match: matchPath('/', location.pathname)
   }}>
      { props.children }
   </RouterContext.Provider>);

};


