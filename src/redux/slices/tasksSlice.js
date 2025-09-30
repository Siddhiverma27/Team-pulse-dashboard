import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "t1", title: "API integration", assigneeId: 1, priority: "High", due: "2025-10-05", status: "In Progress" },
  { id: "t2", title: "Figma handoff", assigneeId: 2, priority: "Medium", due: "2025-10-07", status: "Todo" },
  { id: "t3", title: "Unit tests", assigneeId: 3, priority: "Low", due: "2025-10-02", status: "Done" },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) { state.push(action.payload); },
      prepare(task) {
        return { payload: { id: nanoid(), status: "Todo", ...task } };
      },
    },
    setTaskStatus(state, action) {
      const { id, status } = action.payload;
      const t = state.find(x => x.id === id);
      if (t) t.status = status;
    },
    reassignTask(state, action) {
      const { id, assigneeId } = action.payload;
      const t = state.find(x => x.id === id);
      if (t) t.assigneeId = assigneeId;
    },
    removeTask(state, action) {
      const id = action.payload;
      return state.filter(t => t.id !== id);
    }
  },
});

export const { addTask, setTaskStatus, reassignTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
