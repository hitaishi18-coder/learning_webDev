let name = "hitaishi"

let repoCount = 50

// console.log(name+repoCount + " value ");            // not recomended 

console.log(`my name is ${name} and repocount ${repoCount}`)


//or

let gameName = new String ('hitaishi-abcaa-aaaa')     // object 

console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))



const newString = gameName.substring(0,2) // do not accept negative values
console.log(newString)


const anotherString = gameName.slice(-8,4)  // accept negative value 
console.log(anotherString)


const newStringOne = "         hitaishi     lohtia    "
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https:abcscfghjknm%20comcom"
console.log(url.replace('%20','--'))
console.log(url.includes('abc'))
console.log(url.includes('hitaishi'))


console.log(gameName.split('-'))