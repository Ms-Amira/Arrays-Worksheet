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

let newArr = ['apple', 'apple', 'cherry', 'apple']

let count = 0;
for (let i = 0; i < newArr.length; i++) {
  if(newArr[i] === 'apple') {
    count++;
  }
};
    console.log(count);

// Part 4: Hands-On Practice
cart = [];

cart.push('crackers', 'cheese', 'wine');

console.log(cart);

cart.pop();

console.log(cart);
console.log(cart.length);

let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = [];

for (let nums = numbers.length - 1; nums >= 0; nums--) {
    reversedNumbers.push(numbers[nums]);
}

console.log(reversedNumbers);
// Part 5 : Conditional Statements with arrays
let array1 = ["a", "b", "c", "d"];
let array2= ["red", "green", "blue"];

if (array1.length < array2.length) {
    console.log('Array 2 has a greater length')
} else {
    console.log('Array 1 has a greater length')
};

// Part 6 : Print Even Indexed Elements
let array = [10, 20, 30, 40, 50, 60];

for (let i = 0; i < array.length; i += 2) {
    console.log(array[i]);
}
// Part 7 : Push Challenge: Nested Loops
const names = ['Alice', 'Bob', 'Charlie'];
const subjects = ['Math', 'Science'];
//You supplies these arrays

for (let i = 0; i < names.length; i++) {
    //standard for loop, nothing special
    //accessing the legnth of names array and increment it starting at 0
    for (let j = 0; j < subjects.length; j++) {
    //created a new var accessing the subjects array to increment starting at 0
        console.log(`${names[i]} - ${subjects[j]}`);
    //used template literals to combine the names at each index anf the subjects at each index using the vars created in each for loop
    }
};