import * as types from './../actions/types';

const initialState = {

  
  getcompanies:[],
  
 

};

export default function Reducer(state = initialState, action) {
  console.log(action.payload)
  switch (action.type) {
   case types.GET_COMPANIES:
      return {
        ...state,
        getcompanies:action.payload
      }

    default:
      return state;
  }
}