import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: localStorage.getItem("role") || "lead", // 'lead' or 'member'
  search: "",
  filterStatus: "All", // Working | Break | Meeting | Off | All
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setRole(state, action) {
      state.role = action.payload;
      localStorage.setItem("role", state.role);
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setFilterStatus(state, action) {
      state.filterStatus = action.payload;
    },
  },
});

export const { setRole, setSearch, setFilterStatus } = uiSlice.actions;
export default uiSlice.reducer;
