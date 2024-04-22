import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { useEffect } from 'react';



export default function RouterGuard(props){
     let cLocation, tLocation, action;

     return (<Router getUserConfirmation={(blockMsg, callback)=>{
           let boolean = null;
           if(props.handlingBlocking){
             boolean = props.handlingBlocking({
                currentLocation:cLocation,
                targetLocation:tLocation,
                action
              }, blockMsg);
             boolean = boolean === undefined || boolean ? true : false;
           };
             
           boolean && callback(true);
     }}>
          <WithGuardHelper injection={(currentLocation, targetLocation, action1)=>{
              cLocation = currentLocation;
              tLocation = targetLocation;
              action = action1;
          }}></WithGuardHelper>
          { props.children }
     </Router>);
};



function GuardHelper(props){

   useEffect(()=>{
       let cancelListening,unblock;      
  

       if(props.isMonitor){
        cancelListening = props.history.listen((location,action)=>{
             props.onChange && props.onChange(props.location, location, action); 
        });
       };


       if(props.isBlock){
        unblock = props.history.block((location,action)=>{
          const msg = typeof(props.setBlocking) === 'function' ? props.setBlocking(props.location, location, action) : props.setBlocking;
          return msg
        }) 
       };


       return ()=>{
        cancelListening();
        unblock();
       };
   }, []);
  

   return null;
};


const WithGuardHelper = withRouter(GuardHelper);