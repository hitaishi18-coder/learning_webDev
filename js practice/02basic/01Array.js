// array // 

const myArr = [0,1,2,3,4,5]
const myHeroes = ["abc" , "xyz" , "ghi"]


const myArr2 = new Array (1,2,3)
console.log(myArr[1])



// Array method 


myArr.push(70)
myArr.push(7)
myArr.pop()
myArr.unshift(5)
myArr.shift()


console.log(myArr)
console.log(myArr.includes(70))
console.log(myArr.indexOf(80))

const newArr = myArr.join()
console.log(typeof newArr)

// slice ..........   splice 

console.log("a" + myArr)
const myArr1 = myArr.slice(1,3)
console.log(myArr1)

console.log("b" + myArr)

const myArray2 = myArr.splice(1,3)
console.log(myArray2)