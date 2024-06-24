import {createSlice} from "@reduxjs/toolkit"
import { DEFULT_ITEMS } from "../data/items";
const itemsSlice= createSlice({
  name:"items",
  initialState:[],
  reducers:{
    addInitialStore:(state,action)=>{
      return action.payload
    }
  }
})
export const itemsActions= itemsSlice.actions;
export default itemsSlice;