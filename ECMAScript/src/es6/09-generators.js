function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Andres', 'Felipe', 'Daniel', 'Alberto']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);