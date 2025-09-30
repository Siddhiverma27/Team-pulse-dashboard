import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    "id": 1,
    "name": "Aarav",
    "roleTitle": "Developer",
    "status": "Break",
    "avatar": "https://api.dicebear.com/9.x/identicon/svg?seed=Aarav"
  },
  {
    "id": 2,
    "name": "Diya",
    "roleTitle": "Designer",
    "status": "Off",
    "avatar": "https://api.dicebear.com/9.x/identicon/svg?seed=Diya"
  },
  {
    "id": 3,
    "name": "Vikram",
    "roleTitle": "QA",
    "status": "Break",
    "avatar": "https://api.dicebear.com/9.x/identicon/svg?seed=Vikram"
  },
  {
    "id": 4,
    "name": "Ishita",
    "roleTitle": "Developer",
    "status": "Working",
    "avatar": "https://api.dicebear.com/9.x/identicon/svg?seed=Ishita"
  },
  {
    "id": 5,
    "name": "Kabir",
    "roleTitle": "DevOps",
    "status": "Meeting",
    "avatar": "https://api.dicebear.com/9.x/identicon/svg?seed=Kabir"
  },
  {
    "id": 6,
    "name": "Meera",
    "roleTitle": "Product",
    "status": "Break",
    "avatar": "https://api.dicebear.com/9.x/identicon/svg?seed=Meera"
  }
];

const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    updateStatus(state, action) {
      const { id, status } = action.payload;
      const user = state.find(m => m.id === id);
      if (user) user.status = status;
    },
    addMember(state, action) {
      state.push(action.payload);
    },
  },
});

export const { updateStatus, addMember } = membersSlice.actions;
export default membersSlice.reducer;
