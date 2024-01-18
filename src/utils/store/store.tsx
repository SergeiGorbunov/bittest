import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./usersApi";
import searchSlice from "./search";

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    search: searchSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
