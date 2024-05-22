
class Carro {
    constructor(marca, modelo, cor, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
    }
    modeloCarro(){
        console.log(`O modelo do carro é: ${this.modelo} da marca: ${this.marca}`);
    }
    retornString(){
        return `Esse carro vem com um motor V8 5.0 `;
    }
    golquadrado(){
        return `Topzera`
    }
}

let carro1 = new Carro('Ford', 'Mustang', 'Vermelho', 2024)
let carro2 = new Carro('Gol', 'Volkswagen', 'Branco', 1990 )

carro1.modeloCarro();
console.log(carro1.retornString());

carro2.modeloCarro();
console.log(carro2.golquadrado());


