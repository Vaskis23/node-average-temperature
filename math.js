//hw1: refactor code -> arrow functions compact
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

module.exports = { add, sub, mul, div };

//hw2: anonymous vs named functions
// Названные функции:
// function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// function mul(a, b) {
//     return a * b;
// }

// function div(a, b) {
//     return a / b;
// }

// Анонимные функции:
// const add = function(a, b) {
//     return a + b;
// };

// const sub = function(a, b) {
//     return a - b;
// };

// const mul = function(a, b) {
//     return a * b;
// };

// const div = function(a, b) {
//     return a / b;
// };

//hw3: using only 4 function from "math" caculate average temperature value (<temperatures.json>)
const fs = require('fs');

// Read temperatures from file
const temperatures = JSON.parse(fs.readFileSync('temperatures.json'));

// Calculate average temperature
const sum = temperatures.reduce((total, temp) => total + temp, 0);
const average = sum / temperatures.length;

console.log("Average temperature:", average);
