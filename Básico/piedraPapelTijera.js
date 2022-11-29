let x = "piedra";
let y = "papel";
let z = "tijera";

let piedraPapelTijera = function(var1,var2) {
switch(true) {
    case var1 === var2:
        console.log("Empate")
        break
    case var1 === x && var2 === y:
        console.log("Gana el jugador dos")
        break
    case var1 === x && var2 === z:
        console.log("Gana el jugador uno")
        break
    case var1 === y && var2 === x:
        console.log("Gana el jugador uno")
        break
    case var1 === y && var2 === z:
        console.log("Gana el jugador dos")
        break
    case var1 === z && var2 === y:
        console.log("Gana el jugador uno")
        break
    case var1 === z && var2 === x:
        console.log("Gana el jugador dos")
        break
    }
}

piedraPapelTijera(y,x)