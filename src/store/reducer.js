/// REAL DATA MONGOOSE API COMMENTED OUT BELOW
//// GENERATE FRONT APP ONLINE DEMO 
import * as actionTypes from "./actionTypes";
 
const STARTLIST = [11, 12, 14, 16, 17,19,20,21,23,25,27,28,29,42,44,45,4]
const DATACARS = []
  
const initState = {
  rides: DATACARS, date: "17-04-2020", note: "", id: '', names: [], detail: [],error: false, errormsg: "", helper: [], carList: STARTLIST, isLoading: true
}

const reducer = ( state = initState, action) => {
    switch(action.type) {
    
      case actionTypes.PREPARE_FOR_DETAIL:
        return {...state, detail: action.detail}
    case actionTypes.SET_HELP_STATE: 
    return {...state, helper: [...action.help]}
  
    case actionTypes.GET_CUSTOM_INFO: 
    return {...state, names: [...action.names]}
    case actionTypes.SET_CAR_ID_INFO: 
    return {...state, rides: {...action.rides}}
    case actionTypes.SET_CAR_ID_FAILED:
      return {...state, error: true, errormsg:  action.msg} 
    case actionTypes.SET_START_LIST:
      return {...state, error: false, startlist: [...action.startlist[0].list], isLoading: false}
    case actionTypes.SET_START_LIST_FAIL: {
      return {...state, error: true, errormsg: action.msg}
    }
   case actionTypes.GET_PERSON_NOTES: {
      return {...state, error: true, errormsg: action.note}
    }
     
         case  actionTypes.GET_PERSON_NOTES_F:
            return {...state, errormsg: action.msg, error: true , isLoading: false}

      default: return state
    }
}  



export default reducer



// import * as actionTypes from "./actionTypes";
 
// const STARTLIST = []
// const DATACARS = []
  
// const initState = {
//   rides: DATACARS, note: "", id: '', names: [], detail: [],error: false, errormsg: "", helper: [], carList: STARTLIST, isLoading: true
// }

// const reducer = ( state = initState, action) => {
//     switch(action.type) {
    
//       case actionTypes.PREPARE_FOR_DETAIL:
//         return {...state, detail: action.detail}
//     case actionTypes.SET_HELP_STATE: 
//     return {...state, helper: [...action.help]}
  
//     case actionTypes.GET_CUSTOM_INFO: 
//     return {...state, names: [...action.names]}
//     case actionTypes.SET_CAR_ID_INFO: 
//     return {...state, rides: {...action.rides}}
//     case actionTypes.SET_CAR_ID_FAILED:
//       return {...state, error: true, errormsg:  action.msg} 
//     case actionTypes.SET_START_LIST:
//       return {...state, error: false, startlist: [...action.startlist[0].list], isLoading: false}
//     case actionTypes.SET_START_LIST_FAIL: {
//       return {...state, error: true, errormsg: action.msg}
//     }
//    case actionTypes.GET_PERSON_NOTES: {
//       return {...state, error: true, errormsg: action.note}
//     }
     
//          case  actionTypes.GET_PERSON_NOTES_F:
//             return {...state, errormsg: action.msg, error: true , isLoading: false}

//       default: return state
//     }
// }  



// export default reducer