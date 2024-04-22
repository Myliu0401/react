
import Tween from './tween.js';


export default function resetScroll({ currentValue, targetValue, time = 1000, mode = 'linear', ...surplus}){

  const difference = targetValue - currentValue;

  const frequency = 16.7;

  let totalTimes = Math.ceil(time / frequency);

  let currentTimes = 0;

  const timerNumber = setInterval(()=>{
     
     if(currentTimes >= totalTimes || currentValue === targetValue){
         clearInterval(timerNumber);
     }
     
     surplus.callback(Tween[mode](currentTimes, currentValue, difference, totalTimes))
     currentTimes++;

  }, frequency);

  return timerNumber;
};