let celular1 = {
    marca: 'Sansung',
    modelo:'Galaxy A34',
    ram: '8gb',
}

class Celular {
    constructor (marca, modelo, ram,){
        this.marca = marca;
        this.modelo = modelo;
        this.ram = ram;
    }
    desbloquearcel(){
        console.log(`Celular foi desbloqueado`);
    }
}

console.log(celular1);

class Gamer extends Celular {
    constructor(marca, modelo, ram, tela, rgb){
        super(marca, modelo, ram);
        this.tela = tela;
        this.rgb = rgb;
    }
}

let celular2 = new Gamer('Asus', 'Rog Phone 7', '16GB', '120hz', true)

console.log(celular2);

class GamerPremium extends Gamer {
    constructor(marca, modelo, ram, tela, rgb, cooler){
        super(marca, modelo, ram, tela, rgb)
        this.cooler = cooler;
    }
}

let celular3 = new GamerPremium(
    'RedMagicPro',
    'Nubia',
    '32GB',
    '144hz',
    true,
    true,
)

console.log(celular3);