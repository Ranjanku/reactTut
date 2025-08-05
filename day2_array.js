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

// const arr = ["ab", "cd", "ef", "gh", "ij"];

// if(arr.indexOf("ab")){
//     console.log("present");
// }else {
//     console.log("not present");
// }


// ------------------------------------------------------------------------------------------------------------------------------

// const myFunc = (a,b,c) => {
//     console.log(a,b,c);
// }

// const  arr = ["ab", "xy", "mn", "ab", "pq"];

// const elem = arr.find(myFunc);


// ------------------------------------------------------------------------------------------------------------------------------


// const arr = [
//     {name : "Ranjan", city: "Patna"},
//     {name : "Vicky", city: "Mumbai"},
//     {name : "Ritesh", city: "Delhi"}
// ];

// // if(arr.indexOf("Ranjan")){
// //     console.log(arr)
// // }

// const myFunc = (a) => {
//     if(a.name === "Ranjan") return true;
//     return false;
// };

// const ans = arr.find(myFunc);

// console.log(ans);


// ------------------------------------------------------------------------------------------------------------------------------

// array iteration Methods. 

const arr = [
    {name : "Ranjan", city: "Patna", score : 32},
    {name : "Vicky", city: "Mumbai", score : 24},
    {name : "Ritesh", city: "Delhi", score: 33},
];

const myFunc = (elem) => {
    if(elem.score < 25)
        return{...elem, remarks: "fail"};
    else return{...elem, remarks: 'pass'};
}

const resArr = arr.map(myFunc);
console.log("resArr :",resArr);