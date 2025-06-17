// const a = "10";
// const b = Number(a);

// console.log(a == b); // true, because == checks for value equality
// console.log(a === b); // false, because === checks for value and type equality


if("10" == "10")
    { console.log(true)} 
        else false; // true, because == checks for value equality.

if("10" === "10")
    { console.log(true)}
        else false; // true, because === checks for value and type equality.

// The following code checks if the string "10" is equal to the number 10 using both loose and strict equality operators.
if("10" == 10)
    { console.log(true)}
        else false; // true, because == checks for value equality.

if("10" === 10)
    { console.log(true)}
        else false; // false, because === checks for value and type equality.

// The following code checks if the string "10" is equal to the boolean true using both loose and strict equality operators.
if("10" == true)
    { console.log(true)}
        else false; // true, because == checks for value equality.  