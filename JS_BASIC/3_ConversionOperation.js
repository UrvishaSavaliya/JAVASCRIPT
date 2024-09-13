//let score = 33

// let score = "33"

let score = "33abc";

console.log(typeof score);

console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

console.log(valueInNumber);

let isLoggedIn = 1
//1 , "" , "abc"

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)


//***********************************   Operations  *****************************************************************

let value = 3
let negvalue = -value

console.log(negvalue);

let str1 = "Hello"
let str2 = " Good morning"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log((3+4) * (5%3));

console.log(+true)  //1

console.log(+"")

let gameCounter = 100
++gameCounter;              //solve in mdn
console.log(gameCounter);