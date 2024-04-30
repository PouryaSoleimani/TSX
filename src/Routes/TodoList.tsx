// ^ TODOLIST COMPONENT

// Declaring a type for the component props
export type TodoListProps = { id: number, title: string, isCompleted: boolean }
type TodosType = TodoListProps[]

const styles: React.CSSProperties = {
    backgroundColor: '#cacaca',
    padding: '6px',
    width: '630px',
    color: 'black',
    fontFamily: "sans-serif",
    borderRadius: "10px",
    border: "10px solid black",
    fontSize: '28px',
    fontWeight: "800"
}



const TodoList = ({ ...Todos }) => {
    console.log(Todos.Todos)
    return (
        <div style={styles}>
            {Todos.Todos.map((todo: TodoListProps) => (
                <h2 key={todo.id}>{todo.id}-{todo.title} -{todo.isCompleted ? '✅' : '❌'}</h2>
            ))}
        </div>
    )
}

export default TodoList 