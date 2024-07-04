import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChecklistState {
  checklist: Checklist[];
}

interface Checklist {
  checklistId: string;
  title: string;
}

const initialState: ChecklistState = {
  checklist: [],
};

const checklistSlice = createSlice({
  name: "checklist",
  initialState,
  reducers: {
    addChecklist(state, action: PayloadAction<Checklist>) {
      state.checklist.push(action.payload);
    },
    removeChecklist(state, action: PayloadAction<string>) {
      const id = action.payload;
      state.checklist = state.checklist.filter(
        (item) => item.checklistId !== id
      );
    },
  },
});

export const { addChecklist, removeChecklist } = checklistSlice.actions;

export default checklistSlice.reducer;
