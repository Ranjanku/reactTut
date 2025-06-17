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


const person = {
    name : "Ranjan Kumar",
    height : 1.52,
    weight : 78,
    college : "LPU",
    getBMI : () => {
        console.log(`BMI :  ${(person.weight / (person.height * person.height)).toFixed(2)}`);
    }

};

person.getBMI();