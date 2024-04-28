//^  INTERFACES IN TYPESCRIPT
const register = (username: { name: string }) => {
    if (username.name == "amin") {
        return true
    } else {
        return false
    }
}

console.log(register({ name: 'ali' }))
console.log(register({ name: "amin" }))

// INTERFACES ARE LIKE TYPES THAT SPECIFY THE EXACT PROPERTIES AND THEIR TYPES IN AN OBJECT , TO CREATE AN INTERFACE WE DO LIKE BELOW :
// ( HINT : NO = OR : FOR CREATING AN INTERFACE )
// ( HINT : WE CAN ONLY SET THE TYPES OF PROPERTIES IN AN INTERFACE AND WE CAN NOT INIT THE VALUES IN AN INTERFACE )
interface User {
    name: string
    email: string
    age: number
    password: number | string
    isLogin: boolean
}

const aliUser: User = {
    name: "ali",
    email: 'ali@gmail.com',
    age: 29,
    password: 'ali123',
    isLogin: false
}
console.log(aliUser)

// ANOTHER EXAMPLE FOR INTERFACES == {PRODUCT}
interface Product {
    id: number
    title: string
    price: number
    catergory: string
    gender: string
    isAvailable: boolean
    img: string
    details: string[]
}

const Shoe: Product = {
    id: 1,
    title: 'Adidas Shoe',
    price: 180,
    catergory: 'shoes',
    gender: 'men',
    isAvailable: true,
    img: 'img/',
    details: ["sports", "daily", "comfortable"]
}

console.log(Shoe)

// A VARIABLE WITH THE TYPE OF AN INTERFACE MUST : 
// 1 - BE AN OBJECT 
// 2 - HAVE THE INTERFACE PROPERTIES
// 3 - THE PROPERTIES MUST HAVE CORRECT TYPES DUE TO INTERFACE PROP TYPES
// 4 - DOESNT HAVE EXTRA PROPERTIES

// HINT : INTERFACE CAN ALSO HAVE METHODS AS A PROPERTY
interface Course {
    id: number,
    title: string,
    sessionsCount: number
    isCompleted: boolean
    teacher: string
    buy(): boolean // A METHOD !
}

const jsCourse: Course = {
    id: 1,
    title: "js course",
    sessionsCount: 200,
    isCompleted: true,
    teacher: 'mr.ahmadi',
    buy: () => { return true }
}
console.log(jsCourse)

//^ OPTIONAL PROPERTIES IN AN INTERFACE ===> ?
interface Employee {
    name: string
    age?: number // THIS IS AN OPTIONAL PROPERTIES  , WE CAN SPECIFY IT IN A VARIABLE , OR WE CAN DONT SPECIFY IT
}
const mrReza: Employee = {
    name: 'REZA MOHAMMADI'
}
// WE HAVENT SPECIFY THE AGE BUT WE DONT HAVE AN ERROR

// WE CAN MODIFY AN INTERFACE LATER IN OUR CODE TOO

interface Employee {
    email?: string
}
// NOW THE PROPERTY EMAIL(OPTIONAL) IS ADDED TO THE EMPLOYEE INTERFACE


// ^ EXTENDS
// OUR INTERFACE CAN EXTEND FROM ANOTHER INTERFACE TOO
interface Teacher extends Employee {
    score: number
    phone: number
}
// NOW THE INTERFACE ( TEACHER ) HAS ALL THE PROPERTIES OF EMPLOYEE , PLUS THE PROPRETIES ( SCORE ) AND ( PHONE )

const rezaImani: Teacher = {
    name: 'REZA IMANI',
    score: 50,
    phone: 93523254533,
    email: 'REZAIMANI@GMAIL.COM',
}

console.log(rezaImani)


// ^ ANOTHER EXAMPLE OF EXTENDING IN INTERFACES
interface Car {
    make: string,
    model: string,
    year: number,
    run: (speed: string) => void
}

interface Peogeut extends Car {
    color: string,
    transmition: "manual" | "automatic"
}

const peogeout207: Peogeut = {
    make: 'IKCO',
    model: "207",
    year: 1401,
    run: (speed) => { console.log(speed) },
    color: 'black',
    transmition: 'automatic'
}
console.log(peogeout207)

// {{ CLASSES }} CAN ALSO EXTEND FROM AN INTERFACE  , IN THIS CASE  , WE USE THE KEYWORD (( IMPLEMENTS ))

class Pars implements Peogeut {
    constructor(
        public make: string,
        public model: string,
        public year: number,
        public run: () => void,
        public color: string,
        public transmition: "manual" | "automatic"
    ) {
        this.make = make,
            this.model = model,
            this.year = year,
            this.run = run,
            this.color = color,
            this.transmition = transmition
    }
}