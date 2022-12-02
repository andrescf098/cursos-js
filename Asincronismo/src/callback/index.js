function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));

// setTimeout

setTimeout(function () {
    console.log("Hola humano!");
},2000)

function gretting(name) {
    console.log(`Hola humano ${name}`);
}
setTimeout(gretting, 2000, 'Andrés')