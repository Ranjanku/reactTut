// const arr = ["tata"," mahindra","suzuki","hundai"];

// arr[10] = "toyota"; // This will not throw an error, but will create a sparse array 
// arr.push("honda"); // Adds "honda" to the end of the array
// arr.pop();

// arr.shift();
// arr.unshift("bmw"); // Adds "bmw" to the beginning of the array

// console.log(arr); // Output: ["bmw", " mahindra", "suzuki", "hundai", "toyota"]

// // using slice to remove elements
// const slicedArr = arr.slice(1, 3); // This will create a new array
// console.log(slicedArr)


// find the index of element whose name is "Ravi" & city is "patna" in the array of objects
const arr = [{name: 'Ranjan', city: 'patna'}, {name: 'Ravi', city: 'Delhi'}, {name: 'Rohit', city: 'patna'}];

console.log(arr.indexOf({name: 'Ravi', city: 'Delhi'}));
console.log(arr.indexOf({name:'Rohit', city: 'Delhi'})); // This will return -1 because the object is not the same reference

