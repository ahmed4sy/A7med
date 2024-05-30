import { configureStore, createSlice } from "@reduxjs/toolkit";
let initState = { type: "none", key: null };
const CounterNotes = createSlice({
  name: "notes",
  initialState: initState,
  reducers: {
    like: (state) => {
      console.log("like");
    },
    deleteNotes: (state) => {
      console.log("delete");
    },
    add: (state) => {
      console.log("add");
    },
  },
});
const Store = configureStore({ reducer: CounterNotes.reducer });
export const { like, deleteNotes, add } = CounterNotes.actions;
export default Store;
