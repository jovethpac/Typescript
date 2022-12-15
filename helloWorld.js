var firstName = "emilybean";
var age = 43;
//let's make a function that takes in a string and returns that string but in all uppercase
//input: string
//output: string
function uppercaseString(str) {
    return str.toUpperCase();
}
var upperCaseName = uppercaseString(firstName); //I added : string after the variable to make it a strict string
console.log(upperCaseName);
//can't pass in age because age is a number
//now that we have covered a bit about basic data types and functions, let's talk a little bit about arrays
var stringArray = ["Joveth", "Jolie", "Emily"];
stringArray.push(firstName);
console.log(stringArray);
