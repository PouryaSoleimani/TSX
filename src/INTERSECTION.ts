let root = document.querySelector(`#root`) as HTMLDivElement
root.style.backgroundColor = '#0000'
//^ INTERSECTIONS IN TS
type Admin = { name: string, privilages: string[] }
type Teacher2 = { name: string, startDate: Date }

// FOR EXAMPLE WE WANT TO DEFINE A TEACHER AS A VARIABLE :
const rezaDolati: Teacher2 = { name: 'REZA DOLATI', startDate: new Date() }
// BUT WHEN WE WANT TO DEFINE SOMEONE WHO IS EIHTER TEACHER BUT ALSO AN ADMIN , WHICH ITS TYPE MUST BE THE COMBINE OF THE TWO OTHER TYPES , WE DO LIKE THIS : 
// WE USE INTERSECTIONS :

const saeediRad: Admin & Teacher2 = { // NOW THIS VARIABLE HAS 2 TYPES , AND IT MUST CONTAIN ALL OF THE 2 TYPES PROPERTIES 
    name: 'Mohammad Saeedi Rad',
    privilages: ["teaching", 'comment answering', 'discount code generating'],
    startDate: new Date()
}

// TO IMPLEMENT A INTERSECTION AND COMBINE TO TYPES FOR A VARIABLE , WE MUST JUST USE {{ & }}
type TeacherAdmin = Admin & Teacher2 // AND ALSO WE CAN MAKE ANOTHER TYPE AS THE INTERSECTION OF 2 OTHER TYPES

//^ TYPEGUARDS IN TS

const showProp = (member: Teacher2 | Admin): void => {

    if ("startDate" in member) {
        console.log(member.startDate)
    } else if ("privilages" in member) {
        console.log(member.privilages)
    }
    console.log(member.name)

}

// THIS ( IF AND ELSE ) WE HAVE WRITTEN HERE ARE CALLED TYPE GUARD

showProp(rezaDolati)

//! OR WE CAN USE (( TYPEOF )) INSTEAD OF (( TYPE IN ))

//^ INDEX TYPES IN TS
interface Product2 {
    [prop: string]: string
}
// IN THE INTERFACE (( PRODUCT2 )) WE HAVE USED INDEX TYPING , AS WE SAID : THE INTERFACE CAN HAVE INFINITE PROPS AS STRING , WITH THE VALUES OF STRING TYPE
// SO WE ARE NOT LIMITED TO A SPECIFIC NUMBER OF PROPERTIES IN VARIABLES WITH THE TYPE OF PRODUCT2
const jacket: Product2 = {
    id: '1',
    title: 'WINTER JACKET',
    brand: 'ADIDAS',
    size: 'MEDIUM',
    season: 'FALL/WINTER',
    gender: 'MEN',
    price: '200',
}
console.log(jacket) 