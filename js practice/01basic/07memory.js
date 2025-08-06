let myName = "hitaishi"
let anotherName=myName

anotherName="rohaz"

console.log(myName)

console.log(anotherName)



// non primitive 

let userOne = {
    email : "abc@gmail.com",
    upi : "34567890",

}


let userTWo = userOne

userTWo.email = "xyz@gmail.com"

console.log(userOne.email)
console.log(userTWo.email)