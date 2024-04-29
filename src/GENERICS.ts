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
function merge(obj1: object, obj2: object): object {
    return Object.assign(obj1, obj2)
}

console.log(merge({ id: 1 }, { name: 'poria' }))
