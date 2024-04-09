import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "todoSlice";
export default configureStore({
  reducers: {
    todosReducer: todoReducer,
  },
});
