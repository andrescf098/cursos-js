let arreglo = [
    {nombre: "coco-cola", costo: "1000"},
    {nombre: "Pepsi", costo: "1100"},
    {nombre: "Big-cola", costo: "1500"},
    {nombre: "Sprite", costo: "800"},
    {nombre: "7-up", costo: "1300"}
]

let gaseosas = arreglo.map(function(arreglo){
    return arreglo.nombre
})
let encuentraGaseosa = arreglo.find(function(arreglo){
    return arreglo.nombre === "Big-cola"
})
console.log(gaseosas)

console.log(encuentraGaseosa)

console.log(4=="4")
//hola

switch (false) { 
	case false: console.log("Soy falso :( ") 
	case true: console.log("Soy verdadero!") 
}
let name;