//^ TODO LIST WITH REACT+TYPESCRIPT
import { Trash2 } from 'lucide-react';
import React, { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


type TodoType = { id: number, title: string, isCompleted: boolean }

const TodoList = () => {
    //STATES
    const [todos, setTodos] = useState<TodoType[]>([])
    const inputRef = useRef<HTMLInputElement | null>(null)
    //FUNCTIONS
    const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let inputTitle = inputRef.current?.value
        const NewTodo = { id: uuidv4(), title: inputTitle, isCompleted: false }
        const copy = todos.slice(0)
        copy.push(Object.assign(NewTodo))
        setTodos(copy)
        if (inputRef.current?.value) { inputRef.current.value = '' }
    }

    const deleteHandler = (ID: number) => {
        const copy = [...todos]
        const filteredTodos = copy.filter(item => item.id !== ID)
        setTodos(filteredTodos)
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='bg-zinc-300 text-sky-700 font-extrabold w-full text-4xl text-center py-2 border-b-8 border-sky-400'>TODO LIST WITH REACT + TYPESCRIPT</h1>

            //^ TODOLIST CONTAINER
            <div id="todoContainer" className='flex flex-col  mt-10 bg-zinc-500 w-[40rem] h-[40rem] border-4 border-white rounded-lg'>
                <h2 className='bg-black text-white text-center  p-3 text-3xl font-extrabold'>TODO LIST</h2>
                <form className='mx-auto space-x-3 ' onSubmit={addTodo}>
                    <input type="text" className='w-[25rem] px-2 py-3 rounded-lg outline-none mx-auto text-lg mt-10 font-bold bg-zinc-800 text-white' ref={inputRef} />
                    <button className='bg-green-950 text-white font-bold hover:bg-green-700 px-7 py-3 rounded-lg' type='submit'>ADD</button>
                </form>
                <ul className='bg-black px-2 py-2 flex  h-full mb-2 flex-col text-white font-extrabold mt-2 w-[80%] mx-auto rounded-lg space-y-2'>
                    {todos.map((todo: TodoType) => (
                        <div key={todo.id} className='flex items-center justify-between px-2 py-2 space-y-3 bg-zinc-800'>
                            <li className='list-disc list-inside text-[20px]'>{todo.title}</li>
                            <button className='flex items-center justify-end' onClick={() => deleteHandler(todo.id)}><Trash2 size={20} className='my-2' strokeWidth={2.25} color='red' /></button>
                        </div>
                    ))}
                </ul>
            </div >


        </div >
    )
}

export default TodoList