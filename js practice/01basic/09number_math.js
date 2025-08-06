
//////////////////////           numbers        //////////////////////

const score = 400 

const balance = new Number(100)

console.log(balance) 


console.log(balance.toString().length)
console.log(balance.toFixed(2))


const otherNumber = 112324.9 
console.log(otherNumber.toPrecision())

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'))



///////////////////////////            maths           /////////////////////////////
console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(7.88))
console.log(Math.min(4,3,8,0,9))
console.log(Math.max(4,3,8,0,9))




console.log(Math.random())                // 0 to 1 

console.log(Math.random())

console.log((Math.random()* 10)  + 1 )

console.log(Math.floor(Math.random()*(max-min+1)) + min)
