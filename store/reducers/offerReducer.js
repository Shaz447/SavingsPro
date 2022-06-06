import * as types from './../actions/types';

const initialState = {

  
  getoffer:[],
  getofferbycat:[],
  getofferbyId:{},
  getsubcatcomp:[]
 

};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
   
    case types.GET_OFFER:
      return {
        ...state,
        getoffer:action.payload
      }

      case types.GET_OFFER_BY_CATEGORY:
      return {
        ...state,
        getofferbycat:action.payload
      }

      case types.GET_OFFER_BY_ID:
      return {
        ...state,
        getofferbyId:action.payload
      }

      case types.GET_SUBCAT_ALL_COMPANY:
      return {
        ...state,
        getsubcatcomp:action.payload
      }



      

      
      
       
   
    default:
      return state;
  }
}