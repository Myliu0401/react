
import loginReducer from "./loginuser.js";
import usersReducer from "./users.js";


export default function reducer(state = {}, action){
       return {
           loginUser: loginReducer(state.loginUser, action),
           users: usersReducer(state.users, action)
       }
};