document.title = 'Thiagao da massa'
let heading = document.createElement('H1');
heading.innerHTML = 'Meu nome é miguel';
document.body.appendChild(heading);
heading.style.borderTop = 'solid 5px #000';
heading.style.color = 'purple'

let nome = document.createElement('H2');
nome.innerHTML = prompt('Digite seu nome:');
document.body.appendChild(nome);