//^ INTERSECTIONS IN TS
type Admin = {
    name: string,
    privilages: string[]
}

type Teacher2 = {
    name: string
    startDate: Date
}
// FOR EXAMPLE WE WANT TO DEFINE A TEACHER AS A VARIABLE :
const rezaDolati: Teacher2 = {
    name: 'REZA DOLATI',
    startDate: new Date()
}
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

