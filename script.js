// Part 1: Understanding Basics of Arrays
let fruits = ['apple', 'banana', 'cherry'];

console.log(fruits[1]);
console.log(fruits.length);

// Part 2: Adding and Removing Elements
fruits.push('orange');
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.push('guava', 'lychee');
console.log(fruits);

fruits.pop();
console.log(fruits.length);

//Part 3: Looping Through Arrays
for (let f in fruits) {
    console.log(fruits[f]);
};

for (let f = 0; f < fruits.length; f++) {
    console.log(fruits[f].charAt(0).toUpperCase() + fruits[f].slice(1).toLowerCase())
};




// Part 4: Hands-On Practice

// Part 5 : Conditional Statements with arrays

// Part 6 : Print Even Indexed Elements

// Part 7 : Push Challenge: Nested Loops
