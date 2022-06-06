import * as types from './types';
import axios from 'axios'
import {api} from './../../utils/urlconfig'


//agar emulator pe chalenge to localhost ki 10.0.2.2 likhenge
export const registerUser = (user) => async (dispatch) => {
try {
   const { data } = await axios.post(`${api}/register`,user);
   if(data === "Email already exists")
     {
       //toastr.error("Email already exist")
     }
     else{
      dispatch({ type: types.REGISTER_USER, payload: data });
     }
  } catch (error) {
    console.log(error);
  }
};



export const  verifyOtpAndSaveDb = (verifyuser) => async (dispatch) => {
  try {
     const { data } = await axios.post(`${api}/verify`,verifyuser);
     if(data.message === "token is not valid please try again"){
    console.log("token is not valid please try again")
     }
     else{
       dispatch({ type: types.VERIFIED_USER, payload: data });
      }
     } 
     catch (error) {
     console.log(error.message);
   }
 };


