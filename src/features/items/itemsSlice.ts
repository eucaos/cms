import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";

export interface Item {
  id: string;
  name: string;
  type?: "FOLDER" | "ASSET";
}

interface ItemsState {
  value: Item[];
}

const initialState: ItemsState = {
  value: [],
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    loadItems: (state, action: PayloadAction<Item[]>) => {
      state.value = action.payload;
    },
  },
});

export const { loadItems } = itemsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const loadItemsAsync = (id?: string): AppThunk => (dispatch) => {
  const endpoint = "/api/items" + (id ? "/" + id : "");
  fetch(endpoint).then((response) =>
    response
      .json()
      .then((items: Item[]) =>
        dispatch(
          loadItems(
            items.map((p) => ({
              ...p,
              type: p.type !== "ASSET" ? "FOLDER" : "ASSET",
            }))
          )
        )
      )
  );
  // setTimeout(() => {
  //   //dispatch(loadItems(items));
  // }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectItems = (state: RootState) => state.items.value;

export const getItem = (state: RootState, id: string) =>
  state.items.value.find((item) => item.id === id);

export default itemsSlice.reducer;
