import { combineReducers } from 'redux'

const ADD_ONE = "ADD_ONE";
const SUB_ONE = "SUB_ONE";

function total (state=0,action){
    switch (action.type) {
        case ADD_ONE:
          return state+1
        case SUB_ONE:
            return state-1
        default:
          return state
      }
} 
function users (state=[{firstName:"Niloo",lastName:"Motita"}],{type,user}){
    switch (type) {
        case'ADD_USER':
          return [...state,user]
          case'REMOVE_USER':
          return state.filter(people => people.lastName!== user.lastName)
        default:
          return state
      }
} 
const rootReducer = combineReducers({total,users})
export default rootReducer;