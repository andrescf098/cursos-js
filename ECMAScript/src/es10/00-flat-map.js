const array = [1, 2, 3, 4, 5, [25, 55, 47, [7, 8, 9]]];

console.log(array.flat(3))

// flat map

const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(v =>[v, v*2]))