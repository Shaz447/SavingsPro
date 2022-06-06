import * as types from './types';
import axios from 'axios'
import {api} from './../../utils/urlconfig'

  export const getOffer = (companyId) => async (dispatch) => {
    
    try {
       const { data } = await axios.get(`${api}/getoffer/${companyId}`);
      dispatch({ type: types.GET_OFFER, payload: data });
      }
     catch (error) {
      console.log(error.message);
    }
    };


    export const getOfferbyId = (offerId) => async (dispatch) => {
      
      try {
         const { data } = await axios.get(`${api}/getofferbyId/${offerId}`);
         dispatch({ type: types.GET_OFFER_BY_ID, payload: data });
        }
       catch (error) {
        console.log(error.message);
      }
      };
  

    export const getofferbycategory = (icategory,companyId) => async (dispatch,getState) => {
     
      try {
          const { data } = await axios.get(`${api}/getOfferbycategory/${companyId}/${icategory}`)
      
        dispatch({ type: types.GET_OFFER_BY_CATEGORY, payload: data });
         }
       catch (error) {
        console.log(error.message);
      }
      };



      export const getSubSpecCatAllComp = (subcat) => async (dispatch,getState) => {
        console.log(subcat)
        
        try {
           const { data } = await axios.get(`${api}/getsubspeccatallcomp/${subcat}`);
           dispatch({ type: types.GET_SUBCAT_ALL_COMPANY, payload: data });
            }
        catch (error) {
          console.log(error);
        }
        };

