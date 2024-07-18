const accountId= 15444
let accountEmail="test12@gmail.com"
var accountPassword="1234"
accountCity="Kathmandu"
//  accountId=2 //not allowed
accountEmail="abc@gmail.com"
accountPassword="121212"
accountCity="Lalitpur"
let accountState;
console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])

/*
prefer not to use var
because of issues in block scope and functional scope
*/
// javascipt is a dynamically typed language
