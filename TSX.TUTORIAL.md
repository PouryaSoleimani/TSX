<!--& TYPESCRIPT IN REACT TUTORIAL  -->

<!--^ 1 - CREATING A REACT + TS PROJECT USING VITE -->

<!--^ 2 - COMPONENT TYPE : -->
-------------------- const App = () : JSX.Element =>{ retrun ()} --> Setting types to the output of our functional component
-------------------- const App = () : React.ReactNode =>{ retrun ()} --> Setting types to the output of our functional component
-------------------- const App : React.FC = () =>{ retrun ()} --> Setting type for pur React Functional Component


<!--^ 3 - PROP TYPES :  -->
type TodoListProps = { id : number , title : string , isCompleted : boolean}

const TodoList = (props : TodoListProps)=>{
    return ()
}

<!-- WE SHOULD ALWAYS DECLARE A TYPE FOR FUNCTIONAL COMPONENTS PROPS , WE USUALLY NAME THE TYPE AS THE FC.NAME + PROPS == type TodoListProps ={} -->
<!-- WE CAN ALSO EXPORT TYPES AND USE IT IN OTHER COMPONENTS -->


<!--^ 4 - REACT TYPES :  -->

- React.CssProperties ==> we can assign this type for a variable when we want to write css styles in variable


<!--^ 5 - EVENTS :  -->

- We can get out event type by hovering on it , and TS will give us the type by using type inference 
  
const clickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    console.log(`CLICK CLICK`)
}
<button className="bg-sky-800 text-white px-1 py-0 text-sm" onClick={clickHandler}>DONE</button>

<!--^ 6 - USESTATE :  -->

const [data , setData ] = useState([])
- Here we haven't assign a type for the data state , but TS will guess it and set its type as an Array , because the default value is an empty array

const [isLoading , setIsLoading] = useState(false)
- Here the isLoading state's Type is boolean , because the default value is false

BUT , If we want to assign the type , we must use generics : 

const [isAvailabe , setIsAvailable] = useState<boolean>(false)
const [text , setText] = useState<string>('HELLO WORLD')
const [phone , setPhone] = useState<number>(9364342521)

<!-- ! NOTE : USING DIFFERENT TYPE DATAS FOR THE STATES ABOVE WILL RETURN AN ERROR -->

<!--^ 7 - USEREF :  -->

const elem = useRef<HTMLInputElement>(null)
useeffect(()=>{
    elem.current?.value
},[])


<!--^ & - USEREDUCER :  -->
<!--^ & - CONTEXT :  -->
<!--^ & - PROPS LIMIT :  -->
<!--^ & - TEMPLATE LITERAL :  -->


<!-- & - REACT + TYPESCRIPT TODO LIST :  -->