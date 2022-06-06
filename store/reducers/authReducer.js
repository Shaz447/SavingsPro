import * as types from './../actions/types';

const initialState = {

  user: {},
  registered:false,
  verifiedmessage:{},
  loginUser:{}

};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case types.REGISTER_USER:
      return {
        ...state,
        user:action.payload,registered:true
      };
     
      case types.VERIFIED_USER :
      return {
        ...state,
        verifiedmessage:action.payload
      };

      case types.SET_CURRENT_USER:
        return{
          ...state,
          loginUser:action.payload
        }
      
       
   
    default:
      return state;
  }
}