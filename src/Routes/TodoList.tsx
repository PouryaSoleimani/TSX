// ^ TODOLIST COMPONENT

// Declaring a type for the component props
type TodoListProps = { id: number, title: string, isCompleted: boolean }

const TodoList = (props: TodoListProps) => {

    return (
        <div>
            {props.id} - {props.title} - {props.isCompleted}
        </div>
    )
}

export default TodoList 