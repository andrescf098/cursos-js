function solution(estudiantes, deathCount, nuevo) {
    if(deathCount<=0) {
        const nuevaArray = estudiantes
        nuevaArray.push(nuevo)
        return nuevaArray
    } else {
        contador = deathCount
        while(contador > 0) {
            estudiantes.pop()
            contador--
        }
        const nuevaArray = estudiantes
        nuevaArray.push(nuevo)
        return nuevaArray
    }
}

console.log(solution(["Nico", "Zule"], 0, "Santi"))
console.log(solution(["Juan", "Juanita", "Daniela"], 1, "Julian"))
console.log(solution(["Nath", "Luisa", "Noru"], 2, "Cami"))