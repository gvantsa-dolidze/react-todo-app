import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import todosReducer from './todosSlice'
export const store = configureStore({
    reducer: {
        counterPage: counterReducer,
        todosPage: todosReducer,
    }
});

    