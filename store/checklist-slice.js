import { createSlice } from "@reduxjs/toolkit";

const checklistSlice = createSlice({
  name: "checklist",
  initialState: {
    checklist: [],
  },
  reducers: {
    addChecklist: (state, action) => {
      const newChecklist = action.payload;
      state.checklist.push({
        id: newChecklist.id,
        title: newChecklist.title,
      });
    },
    removeChecklist: (state, action) => {
      const id = action.payload;
      state.checklist = state.checklist.filter((item) => item.id !== id);
    },
  },
});

export const checklistAction = checklistSlice.actions;
export default checklistSlice.reducer;
