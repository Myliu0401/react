export const LOGIN = 'loginUser';


/**
 * 创建登录用户action
 * @param {*} token 令牌
 * @returns 
 */
export function createLoginUserAction(token){
   return {
     type: LOGIN,
     payload: token
   }
}