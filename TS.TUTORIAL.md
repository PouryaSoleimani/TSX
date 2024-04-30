<!-- ^ TYPESCRIPT TUTORIAL -->

1 - USUAL TYPES : string , number , boolean , Function , object , [] , string[] , number[] , any , void , null , undefined , unknown


2 - TYPE INFERENCE AND TYPE ANNOTATION  


3 - UNION TYPES : number | string


4 - LITERAL TYPES : px | rem | em


5 - TEMPLATE LITERAL TYPES : `${number}px | ${string}cm`


6 - TYPE CASTING AND DOM CASTING : let a = 10 as number /// document.queryselector('#root') as HTMLDivElement


7 - VOID TYPE IN FUNCTIONS : function sum (num1 , num2) : void {return num1 + num2}


8 - FUNCTION TYPE : function sum : (num1:number , num2:number) : number { return num1 + num2}


9 - ALIAS TYPES : type combine = number | string | boolean ==> let myTestVar : combine = 12 / 'hello' / false


10- TSCONFIG.JSON FILE AND CONFIGURATIONS


11- INTERFACES : interface product = {id : number , title : string , price : number , isAvailable : boolean , brand?: string}


12 - INTERSECTIONS : let saeediRad  : Admin & Teacher = {id : 1 , name:'saeediRad' title:'ADMIN' , privileges : ['Courses', 'Comments']}


13 - INDEX TYPES : interface PRODUCT { [prope:string] : string }


14 - NAMESPACES : namespace IranKhodro { let car = 'SAMAND'} , namespace Saipa { let car = 'PRIDE' }

