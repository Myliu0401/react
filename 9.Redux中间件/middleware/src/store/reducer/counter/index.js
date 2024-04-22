import { COUNTER_increase, COUNTER_reduce, COUNTER_async_increase, COUNTER_async_reduce  } from '../../actions/counter/index.js';


export default function counterReducer(state = 10, action){
        switch(action.type){
            case COUNTER_increase :
              return state + 1;
            
            case COUNTER_reduce :
              return state - 1;

            default : return state;
        }
}