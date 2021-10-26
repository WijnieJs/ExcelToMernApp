import * as actionTypes from "./actionTypes"
import axios from 'axios'; 
export const prepareForDetail = (result) => {
  return {
    type: actionTypes.PREPARE_FOR_DETAIL,
    detail: result
  }
}
 

export const setCarFail = (message) => {
  return {
    type: actionTypes.SET_CAR_ID_FAILED,
    msg: message
  }
}
export const setCarIdInfo = (carInfo) => {
  return {
    type: actionTypes.SET_CAR_ID_INFO,
    rides: carInfo
  }
}



export const fetchCarInfo = (carId) => {

  return (dispatch) => {
    axios.get(`http://localhost:5000/feed/post/${carId}`)
    .then((res) => {
      dispatch(setCarIdInfo(res.data))
    
    })
    .catch((error) => {
      dispatch(setCarFail("Deze auto konden we niet vinden. Andere proberen ?"))
       
    })
  }
}
export const getPersonNote = (noteinfo) => {
  return {
    type: actionTypes.GET_PERSON_NOTES,
    note: noteinfo
  }
}
export const getPersonFailed = (message) => {
  return {
    type: actionTypes.GET_PERSON_NOTES_F,
    msg: message
  }
} 
 
export const setPersonNotes = (name) => {
  console.log(name)
  return (dispatch) => {
    axios.post( `http://localhost:5000/feed/person/name`, name ).then((res) => {
      console.log(res.data)
      dispatch(getPersonNote(res.data))
    }).catch((error) => {
      console.log(error)
      dispatch(getPersonFailed(error))
    })
  }
}


export const setHelpState = (help) => {
  return {
    type: actionTypes.SET_HELP_STATE,
    help: help
  }
}
export const setCarList = (list) => {
  return {
    type: actionTypes.SET_CAR_LIST,
    list: list
  }
}
export const setCustomerNote = (name) => {
  console.log(name)
   return (dispatch) => {
    axios.post(`http://localhost:5000/feed/personid/${name}`)
    .then((res) => {
      // dispatch(setStartlist(res.data))
     console.log(res.data)
    })
    .catch((error) => {
      // dispatch(setStartFailed("Sorry, Probeer je eigen auto nummer eens ?"))
       
    })
  }
} 

export const getCustomInfo = (names) => {
  return  {
    type: actionTypes.GET_CUSTOM_INFO,
    names: names
  }
}
    
export const setCarIdStartList = (startlist) => {
  
  return (dispatch) => {
    axios.get(`http://localhost:5000/feed/startlist `)
    .then((res) => {
      dispatch(setStartlist(res.data))
     
    })
    .catch((error) => {
      dispatch(setStartFailed("Sorry, Probeer je eigen auto nummer eens ?"))
       
    })
  }
}

export const setStartlist = (list) => {
    return {
    type: actionTypes.SET_START_LIST,
    startlist: list
  }
}

export const setStartFailed = (message) => {
    return {
    type: actionTypes.SET_START_LIST,
     msg: message
  }
}