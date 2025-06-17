// const arr = [{name:'Ranjan', city : 'phagwara'}, {name:'Ravi', city: 'Delhi'}];

// // when we are creating an object, it is stored in a different memory location
// // so when we compare two objects, they are not equal even if they have the same properties
// if({name:'Ranjan'} == {name:'Ranjan'}) {
//     console.log("true");
// } else {
//     console.log("false"); // false, because these are different object references
// }

// // big mistake
// if({} == {}) {
//     console.log("true");
// } else {
//     console.log("false"); // false, because these are different object references

// }

// ----------------------------------------------------------------------------------------------------------------------------

const arr = ["ab", "cd", "ef", "gh", "ij"];

if(arr.indexOf("ab")){
    console.log("present");
}else {
    console.log("not present");
}

