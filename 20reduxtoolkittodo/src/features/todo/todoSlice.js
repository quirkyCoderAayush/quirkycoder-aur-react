import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    updateTodo: (state, action) => {
        const { id, title } = action.payload
        const todo = state.todos.find(todo => todo.id === id)
        if (todo) {
          todo.title = title
        }
      },
    },
});

export const { addTodo, deleteTodo, toggleTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
