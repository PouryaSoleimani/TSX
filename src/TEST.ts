//^ TYPESCRIPT TESTING 
let age: 30 = 30
//^ THIS IS A LITERAL TYPE ---> THE VARIABLE AGE HAS A TYPE OF 30 AND CAN ONLY ACCEPT THE VALUE OF THE NUMBER 30
let userAge: 30 | 31 | 32 = 31
//^ THIS IS A MIX OF UNION TYPES AND LITERAL TYPES
function setCssProperty(params: 'px' | 'rem' | 'em') {
    return `20${params}`
}
console.log(setCssProperty('px'))

//^ TEMPLATE LITERAL TYPES 
function setCssPropertyLiteral(params: `${number}px` | `${number}rem` | `${number}em`) {
    return params
}
console.log(setCssPropertyLiteral(`12px`))

//^ UNKNOWN TYPE
let Unknown: unknown = 1
let Any: any = 2
// Any++
// Any.length
// Any.push(3)
// Any.name = 10
// Unknown++ --> THIS RETURNS AN ERROR .. ANY HAS NO TYPECHECKING BUT UNKNOWN HAS TS TYPE CHECKING

//^ TYPE CASTING
let test: unknown = 1
let stringTest = test as string // --> HERE WE HAVE CHANGED THE TYPE OF (STRINGTEST) FROM UNKNOWN TO STRING (MEHTOD 1)(MORE POPULAR)
let stringTest2 = <string>test // --> HERE WE HAVE CHANGED THE TYPE OF (STRINGTEST) FROM UNKNOWN TO STRING TOO. (METHOD 2)

// ^ CONST CASTING
let number = 12 as const // HERE FROM NOW ON number IS A CONST (CONSTANT VARIABLE) AND CANNOT BE REASSIGNED
// number = 13 --> THIS WILL RETURN AN ERROR
const numbers = [1, 2, 3] as const
// when we write as const for a const , this variable can never change again , not even with push() or any other methods and it will remain the same
// in this case numbers is a (( READ-ONLY )) variable

const user = { id: 1, name: 'pourya' } as const
// user.name = 'ali' --> this will return an error because we said as const for the user constant , and now user is immutable and cannot change


// ^ CASTING IN DOM
let ROOT = document.getElementById('root') as HTMLDivElement // OR JUST USE A !
// WHEN WE DEFINE THE EXACT ELEMENT FOR OUR ELEMENT , ITS CALLED DOM CASTING , DOM CASTNG HELPS US IN AUTO COMPLETES , WE CAN ALSO USE ? BEFORE THE PROPERTY WE WANT TO CALL
let text = ROOT?.innerHTML // --> HERE THE ( ? ) CHECKS TO SEE IF THERE IS A ROOT ELEMENT OR NOT , THEN ACCESS THE PROPERTY OF IT


// ^ ENUM TYPE
enum Role {
    Admin,
    Teacher,
    User,
}

//^ VOID TYPE IN FUNCTIONS
function logger(params: string): void { console.log(params) } // a function with the type of VOID , is a function which doesnt return anything and doesnt have a return line

// ^ FUNCTION TYPE
const sum = (num1: number, num2: number): number => {
    return num1 + num2
}
const logger2 = (param: string): void => {
    console.log("param :", param)
}

// let testFunc: Function;
let testFunc: (num1: number, num2: number) => number;
// Here is how to set a function type for a variable , either to set the Function type or set a exact type of function we want
testFunc = sum

console.log(sum(12, 8))
console.log(testFunc(12, 8))


// ^ CALLBACKS IN TS
function sum2(num1: number, num2: number, callback: Function) {
    const result = num1 + num2
    callback(result)
}
function sum3(result: number) { console.log(result) }

sum2(10, 20, sum3)


//^ ALIAS TYPE 
const item1: number | string = 10
const item2: number | string = 20
const item3: number | string = 30
console.log(item1, item2, item3)
// here we have repeated the type (numeber | string ) 3 times !!!
// to avoid that , we must create a new type with the combination of the two (number and string) types , to make a custom type we do like this :
type combine = number | string // THIS IS CALLED AN ALIAS TYPE
// and now we use our new self made type for the new variables
const item4: combine = 40

type combine2 = number | string | boolean
const item5: combine2 = true

type invalidTexts = 'ADIMIN' | "USERS"

//^ TS.CONFIG OPTIONS
//----
//^ CLASSES IN TYPESCRIPT
class Person {
    name: string
    email: string
    age: number
    constructor(name: string, email: string, age: number) {
        this.name = name
        this.email = email
        this.age = age
    }
}
const aliPerson = new Person('ALI', "ALI@GMAIL.COM", 26)

console.log(aliPerson)

const testPerson: Person = aliPerson
console.log(testPerson)

// EXTENDING
class Student extends Person {
    lessons: string[]
    constructor(name: string, email: string, age: number, lessons: string[]) {
        super(name, email, age)
        this.lessons = lessons
    }
}

const mamadStudent = new Student("mamad", "mamad@gmail.com", 25, [])
console.log(mamadStudent)

//^ ACCESS MODIFIERS IN TS
// PUBLIC , PRIVATE , PROTECTED , READ-ONLY , STATIC


