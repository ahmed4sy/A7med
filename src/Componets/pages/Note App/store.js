import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let initState = { type: "none" };
const CounterNotes = createSlice({
  name: "notes",
  initialState: initState,
  reducers: {
    like: (state, Key) => {
      axios.post("http://127.0.0.1:8080/api/notes", {
        type: "like",
        key: Key.payload,
      });
      console.log("like");
    },
    deleteNotes: (state, Key) => {
      axios.post("http://127.0.0.1:8080/api/notes", {
        type: "delete",
        key: Key.payload,
      });
      console.log("delete");
    },
    add: (state, DataAdd) => {
      axios.post("http://127.0.0.1:8080/api/notes", {
        type: "add",
        key: DataAdd.payload,
      });
      console.log("add");
    },
  },
});
const Store = configureStore({ reducer: CounterNotes.reducer });
export const { like, deleteNotes, add } = CounterNotes.actions;
export default Store;
