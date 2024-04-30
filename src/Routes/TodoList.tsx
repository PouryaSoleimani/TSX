// ^ TODOLIST COMPONENT

// Declaring a type for the component props
export type TodoListProps = { id: number, title: string, isCompleted: boolean }


const TodoList = ({ id, title, isCompleted }: TodoListProps) => {
    const styles: React.CSSProperties = {
        backgroundColor: '#cacaca',
        padding: '5px',
        width: '430px',
        color: 'black',
        fontFamily: "sans-serif",
        borderRadius: "10px",
        border: "10px solid black",
        fontSize: '38px',
        fontWeight: "800"
    }

    return (
        <div style={styles}>
            {id} - {title} - {isCompleted ? '✅' : '❌'}
        </div>
    )
}

export default TodoList 