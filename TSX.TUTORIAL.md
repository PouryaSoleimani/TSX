<!--^ TYPESCRIPT IN REACT TUTORIAL  -->

1 - CREATING A REACT + TS PROJECT USING VITE

2 - COMPONENT TYPE : const App = () : JSX.Element =>{ retrun ()} --> Setting types to the output of our functional component
-------------------- const App = () : React.ReactNode =>{ retrun ()} --> Setting types to the output of our functional component
-------------------- const App : React.FC = () =>{ retrun ()} --> Setting type for pur React Functional Component


3 - PROP TYPES : 
type TodoListProps = { id : number , title : string , isCompleted : boolean}

const TodoList = (props : TodoListProps)=>{
    return ()
}

<!-- WE SHOULD ALWAYS DECLARE A TYPE FOR FUNCTIONAL COMPONENTS PROPS , WE USUALLY NAME THE TYPE AS THE FC.NAME + PROPS == type TodoListProps ={} -->
<!-- WE CAN ALSO EXPORT TYPES AND USE IT IN OTHER COMPONENTS -->


4 - REACT TYPES : 

- React.CssProperties ==> we can assign this type for a variable when we want to write css styles in variable

-