let json1 = { name: "Mr. Michi", food: "Pescado" };
let json2 = { age: 12, color: "Blanco" }

function solution(json1, json2) {
    let data = { ...json1, ...json2};
    return data;
}

console.log(solution(json1));