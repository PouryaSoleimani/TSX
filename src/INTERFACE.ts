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