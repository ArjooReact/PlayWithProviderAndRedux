import { combineReducers,configureStore } from "@reduxjs/toolkit";
import loginReducers from '../slices/loginSlice'



const rootReducers=combineReducers({
    loginReducer:loginReducers
})
export const store=configureStore({
   reducer:rootReducers
})

export default store