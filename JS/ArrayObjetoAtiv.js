let guitarra = {
    ra: 12345,
    corpo: 'flying v',
    braço: 'bolt-on',
    Information: {
        trastes: 24,
        captadores: 'Humbucker',
        cordas: 6,
}
}
console.log(guitarra.corpo)
console.log(guitarra.braço)
console.log(guitarra.Information)

let carro = {
    ra: 12345,
    Marca: 'Ford',
    modelo: 'Mustang',
    Information: {
        motor: 'V8',
        Tração: 'Traseira',
        Cor: 'Vermelho',
}
}
console.log(carro.Marca)
console.log(carro.modelo)
console.log(carro.Information)


let animal = {
    ra: 12345,
    nome: 'cachorro',
    raça: 'Dobermann',
    Information: {
        cor: 'marrom',
        peso: '45kg',
        altura: '61cm',
}
}
console.log(animal.nome)
console.log(animal.raça)
console.log(animal.Information)

console.log('--------------------------')

let {
    Marca,
    modole,
    Cor,
} = carro

console.log(Marca)
console.log(cor)
console.log(modelo)

let carrafa