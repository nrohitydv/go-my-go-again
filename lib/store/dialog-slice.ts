import { createSlice } from "@reduxjs/toolkit";

const dialogSlice = createSlice({
  name: "dialog",
  initialState: { dialogOpen: false },
  reducers: {
    DialogOpener: (state) => {
      state.dialogOpen = !state.dialogOpen;
    },
  },
});
export const { DialogOpener } = dialogSlice.actions;
export default dialogSlice.reducer;
