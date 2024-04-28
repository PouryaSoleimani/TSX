### TYPESCRIPT TUTORIAL
<!--^ 1 - TYPE INFERFENCE AND TYPE ANNOTATION -->
let a = 'HELLO' >>>>> This is type inference
let b : string = 'WORLD' >>>>> This is type annotation

<!-- ^ 2 - SIMPLE TYPES -->
(( STRING , NUMBER , BOOLEAN , OBJECT, ARRAY , NULL , ANY , VOID ))

<!-- ^ 3 - PRO TYPES -->
(( TUPLE , UNKNOWN ))

TUPLE : A TUPLE TYPE IS LIKE THE ARRAY TYPE BUT THE DIFFERENCE IS WE SPECIFY THE NUMBER AND TYPE OF THE ARRAY INDEXES ==> const Tuple : [number , string] ==> This tells that this type must be an array with 2 indexes , the first one must be a (number) and the second one must be a (string) 

UNKNOWN : let name : unknown = "pourya"

<!-- ^ 4 - TYPES FOR FUNCTIONS -->
function login ( username : string , password : number ) : boolean {
    if(username === "pourya" && password === 12345 ){
        return true
    } else {
        return false
    }
}
DEFINING TYPES FOR FUNCTIONS ARGUMENTS ARE LIKE DEFINING TYPES FOR VARIABLES ( : string ) 
DEFINING TYPES FOR FUNCTIONS OUTPUT IS ALSO LIKE DEFINING TYPES FOR VARIABLES ( : boolean ) 

<!-- ^ UNION TYPES -->
-- Sometimes we need to define more than one type for a variable , to predict errors when variable changes
let unionVariable : string | number = "hello"
let unionVariable = 12 ---> NO ERROR :)
----> type unionTypeArray = ( string | number | boolean )[] 


<!-- ^ LITERAL TYPES -->
-- WE CAN ASSIGN SPECIAL VALUES AS A TYPE FOR VARIABLES , THIS IS CALLED LITERAL TYPES
let number : 18 = 18 ====> IN THIS CASE THE VARIABLE (18) CAN ONLY HAVE THE VALUE OF 18 AND NOTHING ELSE

let age : 30 = 30
// THIS IS A LITERAL TYPE ---> THE VARIABLE AGE HAS A TYPE OF 30 AND CAN ONLY ACCEPT THE VALUE OF THE NUMBER 30

let userAge : 30 | 31 | 32 = 31
// THIS IS A MIX OF UNION TYPES AND LITERAL TYPES 

function setCssProperty(params: 'px' | 'rem' | 'em') {
    return `20${params}`
}
console.log(setCssProperty('px'))

<!--^ TEMPLATE LITERAL TYPES -->
function setCssPropertyLiteral(params: `${number}px` | `${number}rem` | `${number}em`) {
    return params
}
console.log(setCssPropertyLiteral(`12px`))

<!--^ UNKNOWN TYPE -->
let Unknown: unknown = 1
let Any: any = 2
// Any++
// Any.length
// Any.push(3)
// Any.name = 10
// Unknown++ --> THIS RETURNS AN ERROR .. ANY HAS NO TYPECHECKING BUT UNKNOWN HAS TS TYPE CHECKING

<!--^ TYPE CASTING -->
let test : unknown = 1
let stringTest = test as string

