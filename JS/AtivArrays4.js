let primeiro = prompt('fale um número que Fibonacci vai')
let segundo = 1
let proximo = 0
let contador = 0



while (contador < 10) {
    alert(contador)
    contador ++;
    proximo = primeiro + segundo;
    primeiro = proximo
    contador++;
}

