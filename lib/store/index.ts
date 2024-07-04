import { configureStore } from "@reduxjs/toolkit";
import checklistReducer from "./checklist-slice";
import commentReducer from "./comment-slice";
import dialogReducer from "./dialog-slice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      checklist: checklistReducer,
      comment: commentReducer,
      dialog: dialogReducer,
    },
  });
};
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
