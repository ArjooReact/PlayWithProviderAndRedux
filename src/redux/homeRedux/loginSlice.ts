import { createSlice } from "@reduxjs/toolkit";


 interface loginSliceType{
  userName:string,
  passWord:string,
  isLoggedIn:boolean
}
let initialState = {
    userData: {
      userName: '',
      passWord: '',
      isLoggedIn:false
    },
  };



const loginSlice= createSlice({
 name:'loginSlice',
 initialState,
 reducers: {
       updateUserName: (state, action) => {
        state.userData.userName=action.payload          
       },
       updateUserPassword:(state,action)=>{
        state.userData.passWord=action.payload
       },
       updateLoggedInStatus:(state,action)=>{
        console.log('Inside Slice value:::',action.payload)
        state.userData.isLoggedIn=action.payload
       }
    
  },
})

export const {updateUserName,updateUserPassword,updateLoggedInStatus}=loginSlice.actions
export default loginSlice.reducer