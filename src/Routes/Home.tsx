import TodoList from "./TodoList"
import { TodoListProps } from "./TodoList"

//^ HOME.TSX =============================================================================================================
const Home = (): React.ReactNode => {

    const number: number = 10
    const isValid: string = 'false'
    const name: string = "POURYA SOLEIMANI"
    type ObjectType = {
        firstName: string
        lastName: string
        age: number
        details: string[]
    }
    const myObject: ObjectType = {
        firstName: 'POURYA',
        lastName: 'SOLEIMANI',
        age: 30,
        details: ["HTML", "CSS", "JS"]
    }
    type SkillsType = string[]
    type SkillsType2 = (string | number | boolean)[]
    type TupleType = [number, string]
    const mySkills: SkillsType = ["HTML", "CSS", "JS", "REACT"]
    const mySkills2: SkillsType2 = ["HTML", false, 100, 200, 300, true, "HELLO"]
    const mySkillsTuple: TupleType = [1, "ADMIN"]

    function login(username: string, password: number): boolean {
        if (username === "pourya" && password === 12345) {
            return true
        } else {
            return false
        }
    }

    console.log(login('pourya', 12345))


    let TodoListItem: TodoListProps = { id: 1, title: 'GO TO GYM', isCompleted: false }

    //RETURN ==============================================================================================================
    return (
        <>
            <div>
                <h1 className="text-red-700 h-full font-extrabold text-5xl p-2">  {number} -{isValid} - {name}</h1>
                <h2 className="border-4 border-black rounded-lg p-3 bg-zinc-300 font-extrabold text-3xl w-fit tracking-tighter">
                    {myObject.firstName} - {myObject.lastName} - {myObject.age} - {myObject.details[0]} - {myObject.details[1]} - {myObject.details[2]}
                </h2>
                <h3 className="flex space-x-4 bg-black text-zinc-200 w-fit p-4 font-bold ml-2 mt-4 text-2xl">
                    {mySkills.map(item => <p className="hover:bg-zinc-800">{item}</p>)}
                </h3>
                <h2 className="bg-sky-800 flex text-4xl font-bold space-x-10 p-2 text-white w-fit ml-2 mt-2">
                    {mySkills2.map(item => <p className="hover:bg-zinc-800">{item}</p>)}
                </h2>
                <h2 className="bg-yellow-400 border-8 border-black flex text-4xl font-bold space-x-10 p-2 text-black w-fit ml-2 mt-2">
                    {mySkillsTuple.map(item => <p className="hover:bg-zinc-800">{item}</p>)}
                </h2>
            </div>
            <TodoList {...TodoListItem} />
        </>
    )
}
export default Home 