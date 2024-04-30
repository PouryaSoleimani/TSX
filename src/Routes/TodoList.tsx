// ^ TODOLIST COMPONENT

import { useEffect, useRef } from "react"

// Declaring a type for the component props
export type TodoListProps = { id: number, title: string, isCompleted: boolean }

// TSX STYLINGS
const styles: React.CSSProperties = {
    backgroundColor: '#cacaca',
    padding: '6px',
    width: '630px',
    color: 'black',
    fontFamily: "sans-serif",
    borderRadius: "10px",
    border: "10px solid black",
    fontSize: '28px',
    fontWeight: "800",
    margin: '0px 10px',
    display: "flex",
    flexDirection: "column",
    gap: "15px"
}

const clickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    console.log(`CLICK CLICK`)
}

const TodoList = ({ ...Todos }) => {
    console.log(Todos.Todos)

    //USEREF
    const elem = useRef<HTMLButtonElement>(null)
    useEffect(() => {
        console.log(elem.current?.textContent)
    }, [])

    //RETURN ---------------------------------------------------------------------------------------------------
    return (
        <div style={styles}>
            {Todos.Todos.map((todo: TodoListProps) => (
                <div key={todo.id} className="flex space-x-10">
                    <h2>{todo.id}-{todo.title} -{todo.isCompleted ? '✅' : '❌'}</h2>
                    <button className="bg-sky-800 text-white px-1 py-0 text-sm" onClick={clickHandler} ref={elem}>DONE</button>
                </div>
            ))}
        </div>
    )
}

export default TodoList 