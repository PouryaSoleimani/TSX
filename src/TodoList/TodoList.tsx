//^ TODO LIST WITH REACT+TYPESCRIPT
import { Trash2 } from 'lucide-react';
import React, { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


type TodoType = { id: number, title: string, isCompleted: boolean }

const TodoList = () => {
    //*STATES
    const [todos, setTodos] = useState<TodoType[]>([])
    const inputRef = useRef<HTMLInputElement | null>(null)

    //*FUNCTIONS
    const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let inputTitle = inputRef.current?.value
        const NewTodo = { id: uuidv4(), title: inputTitle, isCompleted: false }
        const copy = todos.slice(0)
        copy.push(Object.assign(NewTodo))
        if (inputRef.current?.value) { setTodos(copy) }
        if (inputRef.current?.value) { inputRef.current.value = '' }
    }

    const deleteHandler = (ID: number) => {
        const copy = [...todos]
        const filteredTodos = copy.filter(item => item.id !== ID)
        setTodos(filteredTodos)
    }

    //* RETURN ================================================================================================================
    return (
        <>
            <div className='flex flex-col justify-start  items-center h-screen bg-gradient-to-b from-zinc-500 to-zinc-800'>
                <h1 className='bg-zinc-900 absolute top-0  text-purple-800 font-extrabold w-full text-4xl text-center z-30 py-2 border-b-8 border-[#CCFF00]'>TODO LIST WITH REACT + TYPESCRIPT</h1>
                <img src="/public/VRIBANT-NATURE-LANDSCAPE-2102023.png" className='w-screen h-full absolute top-0 left-0' />

                {/* //^ TODOLIST CONTAINER */}
                <div id="todoContainer" className='flex flex-col backdrop-filter backdrop-blur-3xl max-h-screen overflow-y-scroll     mt-24 z-50 w-[40rem] pb-10  border-4 border-[#fafafa] rounded-lg'>
                    <h2 className='bg-black text-cyan-500 text-center  p-3 text-3xl font-extrabold'>TODO LIST</h2>
                    <form className='mx-auto space-x-3 ' onSubmit={addTodo}>
                        <input type="text" className='w-[25rem] px-2 py-3 rounded-lg outline-none mx-auto text-lg mt-10 font-bold bg-zinc-800 text-white' ref={inputRef} placeholder='What is the Task Today ?' />
                        <button className='bg-pink-700 text-black font-extrabold hover:scale-110 px-7 py-3 rounded-lg' type='submit'>ADD</button>
                    </form>
                    <ul className='bg-black/30 px-8 py-6 flex h-fit mb-2 flex-col text-white font-extrabold mt-2 w-[83%] mx-auto rounded-lg space-y-2'>
                        {!todos.length ? (<h2 className='text-2xl'>No Tasks Yet ...</h2>) : (

                            todos.map((todo: TodoType) => (
                                <div key={todo.id} className='flex items-center justify-between bg-black/80 pl-2 border-4 border-pink-500 rounded-lg'>
                                    <li className='list-disc list-inside text-[22px]'>{todo.title}</li>
                                    <button className='flex items-center justify-center' onClick={() => deleteHandler(todo.id)}>
                                        <Trash2 size={40} className=' bg-red-200 py-1 w-20 hover:bg-[#C40C0C] hover:text-red-200 text-[#C40C0C] ' strokeWidth={2.25} />
                                    </button>
                                </div>
                            ))

                        )}

                    </ul>
                </div >

            </div >
        </>
    )
}

export default TodoList