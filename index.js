const calculationsHistory = []; //Initializing an empty array where all of the objects will be placed

/*Add function will only take 2 parameters. Created the equation for the function, 
then created the added object, logging the result for the user, 
and pushed the object into the calulationsHistory array*/
function add(num1, num2) {
    const added = num1 + num2;
    const addedObject = {
        operation: 'add', 
        operands: [num1, num2],
        result: added
    };
    console.log(num1, ' + ', num2, ' = ', added)
    return calculationsHistory.push(addedObject);
};

/*Subtract function will only take 2 parameters. Created the equation for the function, 
then created the subtracted object, logging the result for the user, 
and pushed the object into the calulationsHistory array*/
function subtract(num1, num2){
    const subtracted = num1 - num2;
    const subtractedObject = {
        operation: 'subtract',
        operands: [num1, num2],
        result: subtracted
    };
    console.log(num1, ' - ', num2, ' = ', subtracted)
    return calculationsHistory.push(subtractedObject);
};

/*Multiply function will only take 2 parameters. Created the equation for the function, 
then created the multiplied object, logging the result for the user, 
and pushed the object into the calulationsHistory array*/
function multiply(num1, num2) {
    const multiplied = num1 * num2;
    const multipliedObject = {
        operation: 'multiply',
        operands: [num1, num2],
        result: multiplied
    };
    console.log(num1, ' * ', num2, ' = ', multiplied)
    return calculationsHistory.push(multipliedObject);
};

/*Divide function will only take 2 parameters. Created the equation for the function, 
if num2 equals to 0, then the console will log an error, else logging the result for the user
and pushed the object into the calulationsHistory array*/
function divide(num1, num2) {
    const divided = num1 / num2;
    if(num2 === 0) {
        return console.error('Error! Not able to divide by 0');
    } else {
        const dividedObject = {
            operation: 'divide',
            operands: [num1, num2],
            result: divided
    };
    console.log(num1, ' / ', num2, ' = ', divided)
    return calculationsHistory.push(dividedObject);
    };
};

/*Callback functions to test my simple JavaScript Calculator. Uncomment each callback function to test our calculator*/
//add(2,10);
//subtract(9, 24);
//multiply(7,22);
//divide(11, 0);
//divide(12, 2);
//This will log out the calculationsHistory array for the user
console.log('Calculation History: ', calculationsHistory);

