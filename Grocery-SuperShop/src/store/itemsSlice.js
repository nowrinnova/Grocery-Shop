import {createSlice} from "@reduxjs/toolkit"
import { DEFULT_ITEMS } from "../data/items";
const itemsSlice= createSlice({
  name:"items",
  initialState:DEFULT_ITEMS,
  reducers:{
    addInitialStore:(state,action)=>{
      return state
    }
  }
})
export const itemsActions= itemsSlice.actions;
export default itemsSlice