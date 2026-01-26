import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@/store/services/apiSlice";
import { errorMiddleware } from "@/utils/apiErrorHandler";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, errorMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
