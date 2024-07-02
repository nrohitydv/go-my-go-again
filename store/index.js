import { configureStore } from "@reduxjs/toolkit";
import checklistReducer from "./checklist-slice";
const store = configureStore({
  reducer: { checklist: checklistReducer },
});

export default store;
