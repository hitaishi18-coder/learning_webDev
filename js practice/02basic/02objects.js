// object literals



const mySym = Symbol("key1")


const JsUser = {
    name: "hitaishi",
    age:22,
    [mySym] : "mykey1",
    isLoggedIn : true ,
    lastLoginDays : ["monday" , "saturday "],
    location : "amritsar"

}

console.log(JsUser.age)
console.log(JsUser["age"])
console.log(JsUser)
console.log(JsUser.mySym)
console.log(typeof mySym)
console.log(JsUser[mySym])



JsUser.email = "abc@gmail.com "
Object.freeze(JsUser)
JsUser.email = "xyz@gmail.com"
console.log(JsUser.email)


JsUser.greeting = function() {
    console.log("hello js user ")
}

JsUser.greetingTwo = function() {
    console.log(`hello js user two ,  ${this.name}`)
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());



// const tinderUser = new Object
const  tinderUser = {}
tinderUser.id =" 1234 "
tinderUser.name = "sam "
tinderUser.isLoggedIn = "true "
console.log(tinderUser)


// const regularUser = {
// email : "some@gmail.com",
// fullName  : {
//     userfullname:{
//         firstname: " disha ",
//         lastname: "lohtia "

//     }
// }
// }
// console.log(regularUser.fullName)




const object1   =  {1:"a"  , 2 :"b"}
const object2   =  {3:"c"  , 4 : "d " }

// const object3 = {object1,object2}

// const object3 = Object.assign({} , object1,object2)

const object3 = {...object1,...object2}   // spread 
console.log(object3) 


console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))

console.log(tinderUser.hasOwnProperty('isloggedIn'))

console.log(Object.entries(tinderUser))










// de structure 

const course = { 
    courseName : "js in hindi ",
    price  : 999,
    courseInstructor : "hitesh"
}

const {courseInstructor : instructor} = course
console.log(instructor)