function auto(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}
const contador = 30
for(i=0; i<contador; i++){
    let x = Math.floor(Math.random()*100)
    let y = Math.floor(Math.random()*10)
    let autoNuevo = new auto("Tesla", "Modelo "+x, "201"+y)
    console.log(autoNuevo)
}
function solution(car) {
    if (car.licensePlate != null || car.licensePlate != undefined)
      car.drivinLicense = true
    else
      car.drivinLicense = false
    return car
  }
  
// Prueba 1
console.log(solution({
    color: 'red',
    brand: 'Kia',
  }));
  
  // Prueba 2
console.log(solution({
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
  }));
  
  // Prueba 3
console.log(solution({ licensePlate: 'RGB255'  }))
