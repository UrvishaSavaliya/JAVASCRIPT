const name = "priya"
const repoCount = 60

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


//second decelaration of string

const gameName = new String("Riya");
console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('R'));

const newString = gameName.substring(0,3);
console.log(newString);

const anotherString = gameName.slice(-2,4);
console.log(anotherString)

const newStringOne = "        Javascript      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://abc.com/abc%20xyz";
console.log(url.replace('%20','-'));

console.log(url.includes('abc'));

console.log(gameName.split('-'));