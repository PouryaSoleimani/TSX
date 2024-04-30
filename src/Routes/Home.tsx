import { TodoListProps } from "./TodoList"
import TodoList from './../TodoList/TodoList';

//^ HOME.TSX =============================================================================================================
const Home = (): React.ReactNode => {

    let Todos = [
        { id: 2, title: 'LEARN TS', isCompleted: false },
        { id: 3, title: 'LEARN LIBRARIES', isCompleted: false },
        { id: 4, title: 'LEARN REACT', isCompleted: true },
        { id: 5, title: 'LEARN NEXT', isCompleted: true },
        { id: 6, title: 'LEARN REDUX', isCompleted: false },
        { id: 7, title: 'LEARN SWR', isCompleted: false },
    ]
    //RETURN ==============================================================================================================
    return (
        <>
            {/* <TodoList Todos={Todos} /> */}
            <TodoList />
        </>
    )
}
export default Home 