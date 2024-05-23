document.title = 'dom';
let heading = document.createElement('H1');
heading.innerHTML = 'Aula de Dom!';
document.body.appendChild(heading);
heading.style.borderBottom = 'solid 3px #000';
heading.style.color = 'red'

let nome = document.createElement('H2');
nome.innerHTML = prompt('');
document.body.appendChild(nome);