let peso = parseFloat(prompt('Qual o seu peso?'))
let altura = parseFloat(prompt('Qual sua altura?'))
let imc = peso / (altura*2)

if (imc >= 18.5 && imc <= 24.9) {
    alert('Seu IMC é está dentro do intervalo saudável')
} else {
    alert('Seu IMC não esta dentro do intervalo saudável')
}