import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import itemsReducer from "../features/items/itemsSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
