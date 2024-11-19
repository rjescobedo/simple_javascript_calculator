const calculationsHistory = [];

function add(num1, num2) {
    const added = num1 + num2;
    const addedObject = {
        operation: 'add', 
        operands: [num1, num2],
        result: added
    };
    return calculationsHistory.push(addedObject);
};
add(5,6);

function subtract(num1, num2){
    const subtracted = num1 - num2;
    const subtractedObject = {
        operation: 'subtract',
        operands: [num1, num2],
        result: subtracted
    };
    return calculationsHistory.push(subtractedObject);
};
subtract(8,5);

function multiply(num1, num2) {
    const multiplied = num1 * num2;
    const multipliedObject = {
        operation: 'multiply',
        operands: [num1, num2],
        result: multiplied
    };
    return calculationsHistory.push(multipliedObject);
};
multiply(5,4);

function divide(num1, num2) {
    const divided = num1 / num2;
    const dividedObject = {
        operation: 'divide',
        operands: [num1, num2],
        result: divided
    };
    return calculationsHistory.push(dividedObject);
};
divide(9,3);


console.log('Calculations History: ' , calculationsHistory);