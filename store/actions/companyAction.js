import * as types from './types';
import axios from 'axios'
import {api} from './../../utils/urlconfig'

export const getCompany = () => async (dispatch) => {
   try {
       const { data } = await axios.get(`${api}/getcompany`);
        dispatch({ type: types.GET_COMPANIES, payload: data });
      }
     catch (error) {
      console.log(error.message);
    }
    };


 



