const register = (username: { name: string }) => {
    if (username.name == "amin") {
        return true
    } else {
        return false
    }
}
console.log(register({ name: 'ali' }))
console.log(register({ name: "amin" }))