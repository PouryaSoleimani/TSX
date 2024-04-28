//^ TODO LIST
import TodoItem from "./TodoItem"
import { todo } from "../Types/TodoList.types";
import { useRef } from "react";

type TodoListProps = { todos: todo[] }

const TodoList = (props: TodoListProps) => {

 const STYLES: React.CSSProperties = { color: 'black', backgroundColor: 'darkorange', fontSize: '3rem', padding: '1rem', fontWeight: '700' }

 const clickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { event.preventDefault(); console.log(`CLICK CLICK`) }

 const inputRef = useRef<HTMLInputElement>(null)

 console.log(inputRef.current?.value)

 //^ RETURN =============================================================================================================================
 return (
  <div>
   {props.todos.map((todo) => (<TodoItem key={todo.id} {...todo} />))}
   <h1 style={STYLES}>HELLO WORLD</h1>
   <button className="bg-slate-600 p-4 border-8 border-black rounded-lg font-bold text-slate-100 mt-6 ml-4" type="submit" onClick={clickHandler}> CLICK ME</button>
   <input type="text" ref={inputRef} />
  </div>
 )
}

export default TodoList 