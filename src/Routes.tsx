import { createBrowserRouter } from "react-router-dom";
import Home from "./Routes/Home";
import TodoList from "./Components/TodoList";
import { todo } from "./Types/TodoList.types";
//____________________________________________________________________________________________________________________________________
const todos: todo[] = [
    { id: 1, title: 'LEARN JS', isCompleted: true },
    { id: 2, title: 'LEARN REACT', isCompleted: false },
    { id: 3, title: 'LEARN TS', isCompleted: false },
]
// ROUTER __________________________________________________________________________ 
export const router = createBrowserRouter([
    { path: "/", element: <Home />, },
    { path: "/todolist", element: <TodoList todos={todos} />, },

]);