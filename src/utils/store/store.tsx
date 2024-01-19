import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./usersApi";
import searchSlice from "./search";
import drawerSlice from "./drawer";
import { transactionsApi } from "./transactionsApi";

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    search: searchSlice,
    drawer: drawerSlice,
    [transactionsApi.reducerPath]: transactionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(transactionsApi.middleware),
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
