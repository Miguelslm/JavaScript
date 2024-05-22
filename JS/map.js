let frutas = ['Banana', 'Abacaxi', 'Melão', 'Uva'];

let newFrutas = frutas.map((fruta) => {
    return fruta.toLocaleUpperCase() 
});

console.log(newFrutas);

let aluno = [
    {
        nome: 'Miguel',
        idade: '27',
        curso: 'Dev. Web',
        matriculado: true,
    },

    {
        nome: 'Leslie',
        idade: '18',
        curso: 'Dev. Web',
        matriculado: true,
    },

    {
        nome: 'Cesar',
        idade: '20',
        curso: 'Dev. Web',
        matriculado: true,
    },

    {
        nome: 'canario',
        idade: 'Eterno',
        curso: 'Admisnistração',
        matriculado: false,
    }

];

let nomeAlunos = aluno.map((objeto) => {
    return objeto.nome
})

console.log(nomeAlunos);

let idadeAluno = aluno.map((objeto) => {
    return objeto.idade
})

console.log(idadeAluno);

let cursoAluno = aluno.map((objeto) => {
    return objeto.curso
})

console.log(cursoAluno);

let alunoMatriculados = aluno.map((objeto) => {
    return objeto.matriculado
})

console.log(alunoMatriculados);




