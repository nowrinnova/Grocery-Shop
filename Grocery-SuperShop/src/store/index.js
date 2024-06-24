import {configureStore} from "@reduxjs/toolkit"
import itemsSlice from "./itemsSlice"
import FatchStatusSlice from "./FatchStatusSlice";

const store=configureStore({
  reducer:{
    items:itemsSlice.reducer,
    fatchStatus:FatchStatusSlice.reducer,
  }
})
export default store;