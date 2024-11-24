const calculationsHistory = []; //Initializing an empty array where all of the objects will be placed

const numOne = document.getElementsByName('num-one-name');
const numOneValue = numOne.value;

function clickAdd() {
    return alert("Clicked add!");
};

function clickSubtract() {
    return alert("Clicked subtract!");
};

function clickMultiply() {
    return alert("Clicked multiply!");
};

function clickDivide() {
    return alert("Clicked divide!");
};



/*Add function will only take 2 parameters. This function will calculate the formula, 
log the equation and result for the user, and return.*/
function add(num1, num2) {
    const added = num1 + num2;
    console.log(num1, ' + ', num2, ' = ', added);
    return added;
}
/*The addToHistory function will take operation, operands, and result as their parameters. 
These parameters will be used as keys as we create an object and push it to the calculationHistory array*/
function addToHistory(operation, operands, result) {
    calculationsHistory.push({
        operation: operation,
        operands: operands,
        result: result
    });
}

/*Subtract function will only take 2 parameters. This function will calculate the formula, 
log the equation and result for the user, and return.*/
function subtract(num1, num2) {
    const subtracted = num1 - num2;
    console.log(num1, ' - ', num2, ' = ', subtracted);
    return subtracted;
}
/*The subtractToHistory function will take operation, operands, and result as their parameters. 
These parameters will be used as keys as we create an object and push it to the calculationHistory array*/
function subtractToHistory(operation, operands, result) {
    calculationsHistory.push({
        operation: operation,
        operands: operands,
        result: result
    });
}

/*Multiply function will only take 2 parameters. This function will calculate the formula, 
log the equation and result for the user, and return.*/
function multiply(num1, num2) {
    const multiplied = num1 * num2;
    console.log(num1, ' * ', num2, ' = ', multiplied);
    return multiplied;
}
/*The multiplyToHistory function will take operation, operands, and result as their parameters. 
These parameters will be used as keys as we create an object and push it to the calculationHistory array*/
function multiplyToHistory(operation, operands, result) {
    calculationsHistory.push({
        operation: operation,
        operands: operands,
        result: result
    });
}

/*Divide function will only take 2 parameters. This function will calculate the formula, 
log the equation and result for the user, and return. If num2 equals to 0, we will log an error. Else, it will return the result of the equation*/
function divide(num1, num2) {
    const divided = num1 / num2;
    if(num2 === 0) {
        console.error('Error! Not able to divide by 0.')
    } else {
        console.log(num1, ' / ', num2, ' = ', divided);
        return divided;
    };
}
/*The divideToHistory function will take operation, operands, and result as their parameters. 
These parameters will be used as keys as we create an object and push it to the calculationHistory array. If the second operand does not equal to 0,
it will push the object to the calculationsHisotyr array. If it does equal to 0, nothing will be pushed into the array*/
function divideToHistory(operation, operands, result) {
    if(operands[1] !== 0) {
        calculationsHistory.push({
            operation: operation,
            operands: operands,
            result: result
        });
    }
}

//Callback functions to test my simple JavaScript Calculator.
let addResult = add(2, 10);
addToHistory('add', [2, 10], addResult);

let subtractResult = subtract(9, 24);
subtractToHistory('subtract', [9, 24], subtractResult);

let multiplyResult = multiply(7, 22);
multiplyToHistory('multiply', [7,22], multiplyResult);

//This should output as an error and should not be pushed into the calculationsHistory array
let divideResult = divide(11, 0);
divideToHistory('divide', [11, 0], divideResult);

divideResult = divide(12, 2);
divideToHistory('divide', [12, 2], divideResult)

//This will log out the calculationsHistory array for the user
console.log('Calculation History: ', calculationsHistory);