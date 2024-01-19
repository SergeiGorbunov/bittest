import { createSlice } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
  name: "drawer",
  initialState: {
    drawer: false,
    userId: 0,
  },
  reducers: {
    setDrawer: (state, action) => {
      state.drawer = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setDrawer, setUserId } = drawerSlice.actions;
export default drawerSlice.reducer;
