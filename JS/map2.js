let notas = [3, 5, 8, 7, 6];

let notasAprovadas = notas.filter((nota) => {
    return nota >= 7
})

console.log(notasAprovadas);