import uuid4 from "uuid"
export const ADD_ONE = "ADD_ONE";
export const SUB_ONE = "SUB_ONE";
export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";

export function addUser ({firstName,lastName}){
   const user = {firstName,lastName,id:uuid4()}
    return{
        type:ADD_USER,
        user
    }    
}
export function removeUser (user){
     return{
         type:REMOVE_USER,
         user
     }    
 }