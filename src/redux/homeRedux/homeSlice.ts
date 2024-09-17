import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    value: number
  }
  

  const initialState: CounterState = {
    value: 0,
  }

const homeSlice= createSlice({
    name:'homeSlice',
    initialState,
    reducers:{
      increament:(state)=>{
        state.value +=1
      },
      decreament:(state)=>{
        state.value -=1
      }
    },
})
export const {increament,decreament}=homeSlice.actions
export default homeSlice.reducer

