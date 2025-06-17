// var x= 1;
// a();
// b();

// console.log(x);

// function a(){
//     var x = 10;
//     console.log(x);
// }

// function b(){
//     var x = 100;
//     var t = 2;
//     console.log(x);
// }

// // window and global space.

// // console.log(window.x);
// // console.log(x);
// // // this points to global level.
// // console.log(this.x);
// // console.log(t); out of scope 
// // console.log(r);
// "use strict"
//  r = 10;
//  console.log(r);


// block scope and shadowing.

const c = 10;
{
    var a = 100;
    let b = 20;
    const c = 30;
    console.log(c);
}
console.log(c);