//^ TODO ITEM
import { todo } from "../Types/TodoList.types";


const TodoItem = ({ id, isCompleted, title }: todo) => {
 return (
  <div className="bg-zinc-200 w-full h-[4rem] px-2 py-2 font-bold  flex flex-col items-start justify-around">
   <h1 className="hover:bg-zinc-500 p-2">{id} - {title} ---{isCompleted ? <span className="text-emerald-600 bg-emerald-300 p-2">DONE</span> : <span className="text-rose-600 bg-rose-300 p-2">NOT DONE</span>}</h1>
  </div>
 )
}

export default TodoItem