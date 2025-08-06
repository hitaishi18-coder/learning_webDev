const accountId = "123456677"
let account_Email = "hitaishi@gmail.com"
var accountPassword = "6789"
city = "jaipur"          // not recommended 
let accountState ;

 //  accountId = 2; // not possible to change const 

account_Email = "abc@gmail.com"
accountPassword="1234567"
city ="bombay"

console.log(accountId);

console.log(accountPassword);

console.log(account_Email);

console.table([accountId,accountPassword,account_Email , city , accountState ])

// prefer not to use           VAR 
// do not use var bcoz of its issue in block scope and functional scope 