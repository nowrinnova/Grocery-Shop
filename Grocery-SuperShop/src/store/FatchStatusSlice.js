import {createSlice} from "@reduxjs/toolkit"

const FatchStatusSlice= createSlice({
  name:"items",
  initialState:{
    fatchDone:false, //panding=false, done=true.
    currentlyFatching:false,
  },
  reducers:{
    markFatchDone:(state)=>{
      return state.fatchDone=true
    },
    markFatchingStarted:(state)=>{
      return state.currentlyFatching=true
    },
    markFatchingFinished:(state)=>{
      return state.currentlyFatching=false
    }
  }
})
export const FatchStatusActions= FatchStatusSlice.actions;
export default FatchStatusSlice