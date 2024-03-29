import { createSlice } from "@reduxjs/toolkit";


const drawerSlice = createSlice({
  name: "drawer",
  initialState: {
    drawer: false,
    userId: 0,
    userMail: '',
  },
  reducers: {
    setDrawer: (state, action) => {
      state.drawer = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setUserMail: (state, action) => {
      state.userMail = action.payload;
    },
  },
});

export const { setDrawer, setUserId, setUserMail } = drawerSlice.actions;
export default drawerSlice.reducer;
