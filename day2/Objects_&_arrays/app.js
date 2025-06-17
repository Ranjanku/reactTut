// const student1 = {
//     name : "Ranjan",
//     Reg_no : 12212830,
//     Branch : "BTech_CSE"
// };

// const student2 = {
//     name : "Navneet",
//     Reg_no : 12212811,
//     Branch : "BTech_CSE"
// };

// const student3 = {
//     name : "Himanshu",
//     Reg_no : 12212809,
//     Branch : "BTech_CSE"
// };

// const student4 = {
//     name : "Pradeep",
//     Reg_no : 12212801,
//     Branch : "BTech_CSE"
// };

// console.log(student1);

// // read the value of property
// const studentName = student1.name;
// console.log(studentName);

// // update the value of property
// student1.name = "Ranjan Kumar";

// // add a new property (key,value pair  to the object)
// student1.age = 20;
// student1.college = "LPU";

// // delete a property from the object
// delete student1.Reg_no;

// console.log("Student1 : ",student1);


// const person = {
//     name : "Ranjan Kumar",
//     height : 2.11,
//     weight : 78,
//     college : "LPU",
//     getBMI : () => {
//         const bmi = (person.weight / (person.height * person.height)).toFixed(2);
//         if(bmi < 20) console.log(`under weight`);
//         else if(bmi > 21 && bmi < 30) console.log(`fit`);
//         else console.log(`obese`);
//     }

// };

// person.getBMI();

// // READ
// // const cllg = person.college;
// // console.log(cllg);

// const whichkey = prompt("Enter the key you want to read from the object : ");
// console.log("😏 : which key", person.whichkey);


const person1 = {
    name : "Ram",
    height : 2,
    weight : 80,
    college : "LPU",
    rollNo : 12212830,
};

const person2 = person1; // person2 is a reference to person1, not a copy

person2.name = "Shyam";

console.log("Person1 : ", person1);
console.log("Person2 : ", person2);

// Destrucutring 

// const {name} = person1; // lhs == rhs.

const {weight, college} = person1;
console.log("🫡 : ->", weight, college);

// const p2 = {...p1} this is not deep copy 