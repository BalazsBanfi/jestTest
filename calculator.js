const message = 'a or b is not a number';

function add(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) { return a + b } else return message;
}
function subtract(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) { return a - b } else return message;
}

function divide(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) { return a / b } else return message;
}

function multiply(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) { return a * b } else return message;
}


const calculator = {
    add, subtract, divide, multiply
}

export default calculator;