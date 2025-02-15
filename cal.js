function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}

function power(a, b) {
    return Math.pow(a, b);
}

function sqrt(a) {
    return Math.sqrt(a);
}

function sin(a) {
    return Math.sin(a);
}

function cos(a) {
    return Math.cos(a);
}

function tan(a) {
    return Math.tan(a);
}

function log(a) {
    return Math.log(a);
}

function exp(a) {
    return Math.exp(a);
}

// Example usage:
console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
console.log(multiply(4, 3)); // 12
console.log(divide(10, 2)); // 5
console.log(power(2, 3)); // 8
console.log(sqrt(16)); // 4
console.log(sin(Math.PI / 2)); // 1
console.log(cos(0)); // 1
console.log(tan(Math.PI / 4)); // 1
console.log(log(Math.E)); // 1
console.log(exp(1)); // 2.718281828459045