// arrays destructuring

let fruits = ['apple', 'banana'];
let [a, b] = fruits;
console.log(a, b);

// Object destructuring

let user ={ userName: 'Oscar', age: 34 }
let { userName, age } = user;
console.log(userName, age);

// spread operator

let person = { name: 'andres', age: 27 };
let country = 'MX';
let data = { id:1, ...person, country };
console.log(data);

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 2, 4, 6, 8, 7);