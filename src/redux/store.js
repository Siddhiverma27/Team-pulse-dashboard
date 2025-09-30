import { configureStore } from "@reduxjs/toolkit";
import members from "./slices/membersSlice";
import tasks from "./slices/tasksSlice";
import ui from "./slices/uiSlice";

const store = configureStore({
  reducer: { members, tasks, ui },
});

export default store;
