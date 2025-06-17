const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
let selectedOperator = null;


// addition
document.getElementById("add").addEventListener("click", ()=>{
    selectedOperator = '+';
});

// subtraction
document.getElementById("sub").addEventListener("click", ()=>{
    selectedOperator = '-';
});

// multiplication
document.getElementById("mult").addEventListener("click", ()=>{
    selectedOperator = '*';
});

// division
document.getElementById("divi").addEventListener("click", ()=>{
    selectedOperator = '/';
});

// calculate when result is clicked.
document.getElementById("res").addEventListener("click", ()=>{
    calculatioin(num1.value, num2.value, selectedOperator);
});

function calculatioin(num1, num2, operator){
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if(isNaN(number1) || isNaN(number2)){
        alert("Enter a valid number!");
        return;
    }
    let result;

    switch(operator){
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if(number2 === 0){
                alert("!!! Can't divide with zero. !!!");
                return;
            }
            result = number1/number2;
            break;
        default:
            return;
    }
    document.getElementById("final-result").textContent = result;

}

