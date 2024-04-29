//^ NAMESPACES

namespace Irankhodro {
    export let car = "206"
}

namespace Saipa {
    export let car = 'Pride'
}

console.log(Irankhodro.car)
console.log(Saipa.car)

// Namespaces are scopes that we can different variables with same name in them , for example in the example above there are two car variables
// in two namespaces , to access them first we have to export them then using . after the namespace name to access to its variables

