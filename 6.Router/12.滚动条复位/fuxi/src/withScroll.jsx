
import { useEffect } from "react";
import resetScroll from "./resetScroll.js";

export default function withScroll(Component){

   return function MyResetScroll(props){

     useEffect(()=>{
        const html = document.documentElement;
        const timerNumber = resetScroll({
          currentValue: html.scrollTop,
          targetValue: 0,
          time: 10000,
          mode: 'bounceBoth',
          callback(value){
            html.scrollTop = value
          }
        });

        return ()=>{
          clearInterval(timerNumber)
        }
     }, []);


     return <Component {...props}></Component>
   };
     
};