let myName = 'Kevin' //infer and implicitly declare the dat type
let myNameA:string = 'Kevin' //infer and explicitly declare the data type

//Alternatively we can

let myNameB: string ;

myNameB = 'Kevin'
myNameB = 'Kagwima'

//Extra examples
let myNameC : string ;
let meaningOfLife : number ;
let isLoading : boolean | number; //union data type
let album : any ; //iN ts ANY IS ALSO A DATA TYPE, you can put a string,number or boolean as the value of the album without encountering any errors

myNameC = 'Kahwa'
meaningOfLife = 42
isLoading = false
isLoading = 5
album = null
album = 42
album = '4 Your Eyes Only'
album = false

//Function Parameters

const sum = ( a:any = 2,b:any ='2',c:any = 2) => {
    return a + b - c
    //you need to explixitly infer the data type in the patameters
}

let a = 2
let b = '2'
let c = 2
console.log(sum) 

//union types

let postId : string | number 
let isActive : number | boolean | string

//A data typee that is mostly used to convert an existing project to a TS project

let re: RegExp = /\w+/g //this is a regular ecxpression that would basically select all words


