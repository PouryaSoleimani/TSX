//^ GENERICS IN TYPESCRIPT
function echo<Type>(params: Type): Type {
    return params
}

console.log(echo('JS'))
console.log(echo(12))
console.log(echo({ id: 1, name: 'pourya' }))

// We use GENERICS in FUNCTIONS when we want a function to return different types of datas with only writing one function
// in the example above , the output of the function is exactly the type of the input
// the word (( Type )) is a example and we can use anything instead of that word

// We can also set the (( Type )) to any data type we want , when we are calling the function
console.log(echo<number>(25))
console.log(echo<string>('HELLO WORLD'))
console.log(echo<object>({ id: 2, name: "alireza" }))

const echoStr = echo('TEXT TEXT')
console.log(echoStr)

const echoNum = echo(12345)
console.log(echoNum)

//^ ADVANCED
function merge<T, U>(obj1: T, obj2: U): T & U { // Here we have two types for each parameter and the output is the combine of our 2 types
    return { ...obj1, ...obj2 }
}
const mergedObjects = merge({ id: 1 }, { name: 'poria' })
console.log(mergedObjects)

// With using generics we can have autocompletes when we are developing
function merge2<X, Y>(param1: X, param2: Y): X & Y {
    return { ...param1, ...param2 }
}

const mergedObj2 = merge({ name: 'ali' }, { family: 'rezayi' })
console.log(mergedObj2)

//^ EXTENDING IN GENERICS

function merge3<A extends object, B extends object>(param3: A, param4: B): A & B {
    return { ...param3, ...param4 }
}
// Here have extend and inherited the type from object type , so any other type except object can not be setted to out params type

//! GENERIC EXERCISE
function describe(param: string) {
    let text = 'zero items'
    if (param.length) {
        text = `${param.length} items are in your text`
    }
    return text
}
let result = describe('HELLO WORLD')
console.log(result)

