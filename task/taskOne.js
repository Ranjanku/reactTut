// create a button called "Click Me" which will change the background color to red on clicked.
let btn = document.createElement("button");
btn.innerHTML = "Click Me";
btn.style.margin = "10px";
btn.style.padding = "10px 20px"
btn.style.backgroundColor = "blue";
btn.style.color = "white";
btn.style.border = "none";
btn.style.borderRadius = "5px"; 
btn.style.cursor = "pointer";
btn.style.fontSize = "16px";

document.querySelector("body").prepend(btn);

// arrow function to change the background color
btn.onclick = () => {
    const changeBackground = document.querySelector("body");

    changeBackground.style.backgroundColor = "red";
    btn.style.backgroundColor = "green"; // Change button color to green after click    
}