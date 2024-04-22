
import  Router  from '../router/react-router/Router.jsx';
import reactRedux from '../react-redux/index.js';
import { useEffect, useContext } from 'react';
import { createLocationChangeAction } from './action-creators.js';

/**
 * 
 * @param {Object} props 属性 
 */
export default function ConnectedRouter(props){

  const context = useContext(reactRedux.context)

  useEffect(()=>{

    const cancelListening = props.history.listen((location, action)=>{
      context.dispatch(createLocationChangeAction(action, location)); // 用于修改仓库中的值
    });

    return ()=>{
      cancelListening(); //取消监听
    };
  }, []);

  if(!props.history){
    return null;
  };
 
  
  return (<Router history={props.history}>{ props.children }</Router>);

};