let botao = document.querySelector("#botao");
let cont = document.querySelector("#contador");

let conts = 0;

function atualiza() {
    conts++;
    cont.textContent = conts;
}

botao.addEventListener(`click ${atualiza}`);