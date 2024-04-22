
import { useEffect,useState } from "react"
import { BrowserRouter as Router, withRouter } from "react-router-dom"


export default function RouterGuard(props){
    let targetLocation = null;
    let currentLocation = null;
    let action = null

     const [ifon,setIfon] = useState({
      targetLocation: null,
      currentLocation: null,
      action: null
     });

     return (<Router getUserConfirmation={(blockMsg, callback)=>{
       let boole = true;
       if(props.handleConfirmation){
          boole = props.handleConfirmation({
             targetLocation,
             currentLocation,
             action
          },blockMsg);
        boole = boole === undefined || boole ? true : false;
       }

       boole && callback(true)
           
     }}>
       <MyGuardHelper injection={(tLocation, action1, cLocation)=>{
         targetLocation = tLocation;
         currentLocation = cLocation;
         action = action1
       }} {...props}></MyGuardHelper>
       { props.children }
     </Router>);
};



function GuardHelper(props){
    

    useEffect(()=>{
      let cancelMonitor = null;
      let nnblock = null;


      if(props.isMonitor){
        cancelMonitor = props.history.listen((location, action)=>{
         props.processingListening && props.processingListening(props.location,location,action)
       }) 
       
     }
 
 
     if(props.isBlock){
       nnblock = props.history.block((location, action)=>{
         console.log(props.location,'====',location)
        props.injection && props.injection(location, action, props.location);
        const msg = typeof(props.blockingMessage) === 'function' ? props.blockingMessage(props.location,location,action) : props.blockingMessage; 
         return msg || '这是阻塞消息'
       })
     }
       return ()=>{
        cancelMonitor();
        nnblock();
       }

    },[]);


    return null


}


const MyGuardHelper = withRouter(GuardHelper);