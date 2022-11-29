if(true) {
    console.log("es verdad")
}

let numero = 1;
let resultado = numero === 1 ? "Sí soy un uno" : "No soy un uno";
console.log(resultado);

function solution(arraySecreto) {
    return typeof(arraySecreto[0] === "string" ? true : false)
  }

console.log(solution(["Huevo", "Gallina", "Vaca"]))

let frutas = ["Fresa", "Manzana", "Pera", "Banana"]

/*for(let i=0; i<frutas.length; i++) {
    console.log(frutas[i])
}*/
/*for(let fruta of frutas) {
    console.log(fruta)
}*/
let contador = 0;
while(true) {
    if(frutas.length>contador) {
        console.log(frutas[contador]);
        contador++;
    } else {
        false;
        break
    }
}
