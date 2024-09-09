import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      {
        title: "Do Homework",
        id: 1,
        completed: false,
      },
      {
        title: "Do Housework",
        id: 2,
        completed: true,
      },
      {
        title: "Go Shopping",
        id: 3,
        completed: false,
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        title: action.payload,
        id: state.todos.length + 1,
        completed: false,
      };
      state.todos.push(newTodo);
    },
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
