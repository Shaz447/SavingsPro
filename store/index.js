import { createStore, applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";


//import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// const persistConfig = {
//   key: 'root',
//   storage,
// }
//const persistedReducer = persistReducer(persistConfig, rootReducer)
let composeEnhancer = compose
if(__DEV__){
  composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose
}
  
//const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose

const middleware = [thunk];



const store = createStore(rootReducer
,
  composeEnhancer(
    applyMiddleware(...middleware),
   
  )
);

export default store
