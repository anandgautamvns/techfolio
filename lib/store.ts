import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./features/portfolioSlice";
import { portfolioApi } from "./features/portfolioApi";

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    [portfolioApi.reducerPath]: portfolioApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(portfolioApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
