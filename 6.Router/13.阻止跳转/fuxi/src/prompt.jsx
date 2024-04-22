
import { useEffect } from "react";
import { withRouter } from 'react-router-dom';

export default withRouter(function Prompt(props){
     console.log(props)
     console.log(props.history.createHref(props.location))
     let unBlock = null;

     useEffect(()=>{

         if(props.isBlock){
             // eslint-disable-next-line react-hooks/exhaustive-deps
             unBlock = props.history.block((location, action)=>{
                  const msg = typeof(props.setMessage) === 'function' ? props.setMessage(location,action) : props.setMessage;
                  return msg;
             });
         };

         return ()=>{
          unBlock && unBlock();
         };
     });

     return null;
});
