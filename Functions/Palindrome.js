"use strict";

const reader = require("prompt-sync");
const prompt = reader();

const n1 = prompt("Enter the First number : ");
console.log(n1);
const n2 = prompt("Enter the Second number : ");
console.log(n2);


if (n1 == n2) {
    console.log("The Given Two Numbers are palindrome");
}
else {
    console.log("The Given Numbers are Not palindrome");
}