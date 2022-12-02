function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();

function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Andrés', 'Rocko', 'Locko'])
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);