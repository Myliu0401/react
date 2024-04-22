export const ADDUSER = 'createUser';
export const DELETEUSER = 'deleteUser';
export const UPDATEUSER = 'updateUser';


/**
 * 创建用户 action
 * @param {*} userIfon 用户数据
 * @returns 
 */
export function createAddUser(userIfon){
     return {
       type: ADDUSER,
       payload: userIfon
     }
};

/**
 * 创建删除用户 action 
 * @param {*} id  用户id
 */
export function createDeleteUser(id){
   return {
     type: DELETEUSER,
     payload: id
   }
};

/**
 * 创建更新用户 action
 * @param {*} id  用户id
 * @param {*} newUserData 新数据
 * @returns 
 */
export function createUpdateUser(id, newUserData){
    return {
      type: UPDATEUSER,
      payload : {
        ...newUserData,
        id
      }
    }
};