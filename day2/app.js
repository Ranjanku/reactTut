// arrow function 

const printBill = (txt) => {
    console.log("------------------------------");
    console.log("₹.",txt);
    console.log("------------------------------")
};

const calculateBillAmountForClothes = (price) => {
    return price*0.2;
};

const calculateBillAmountForDrink = (price) => {
    return price*1.2;
};

const calculateBillAmountForFood = (price) => {
    return price * 1.12
};

const printBillForAll = (txt) => {
    console.log("------------------------------");
    console.log("Your Bill For Food, drink and clothes is : ");
    console.log("₹.",txt);
    console.log("------------------------------");
}

const printBillForFoodAndDrink = (txt) => {
    console.log("------------------------------");
    console.log("Your Bill For Food And drink is : ");
    console.log("₹.",txt);
    console.log("------------------------------");
}

// higher order function -> the function which accept another function as
// a parameter OR returns a function

const generateBill = (food, clothes, drinks, cb) => {
    const foodAmount = calculateBillAmountForFood(food);
    const clothesAmount = calculateBillAmountForClothes(clothes);
    const drinksAmount = calculateBillAmountForDrink(drinks);

    const finalAmount = foodAmount+ clothesAmount + drinksAmount;
    cb(finalAmount);
};

generateBill(100, 400, 100, printBillForAll); // printBillForAll is a callback.
generateBill(100, 0, 100, printBillForFoodAndDrink)
