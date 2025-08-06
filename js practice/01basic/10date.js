//                    date                 // 


let myDate = new Date ()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)



let myCreatedDate = new Date(2025,9,6)
let myCreatedDate2 = new Date("2025-09-7")
let myCreatedDate3 = new Date("01-6-2025")


console.log(myCreatedDate.toString())

let myTimestamp = Date.now()
console.log(myTimestamp)
console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000))



let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())