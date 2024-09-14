
//primitive

// 7 types: String, Number, Boolearn, null, undefined, symbol, BigInt
//js is dynamically typed language
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')

const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 463254625473264537547n;

//Reference (Non primitive)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
//Array, Objects, Functions

const heros = ["Priya","Riya","Kiya"];

let myObj = {
    name: "abc",
    age:  22,
}

const myFunction = function(){
    console.log("Hello World....");
}

console.log(typeof myFunction)

//Assignment all return type list using typeof function


//stack and heap which use

//stack (primitive), heap(non-primitive)

let myYoutubeName = "hr@gmail.com";
let anotherName = myYoutubeName

console.log(anotherName);
console.log(myYoutubeName);

let user = {
    email : "user@google.com",
    upi   :  "user@ybl"
}

let userTwo = user;

console.log(userTwo);

userTwo.email = "userTwo@gmail.com";

console.log(user.email);
console.log(userTwo.email);