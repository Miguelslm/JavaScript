let nota = 'C'
// A = otimo B - regular c - ruim

switch (nota) {
    case 'A':
        console.log(`Nota do atendimento: Ótimo`);
        break;
    case 'B':
        console.log(`Nota do atendimento: Regular`);
        break;
    case 'C':
        console.log(`Nota do atendimento: Ruim`);
        break;

    default:
        console.log(`Nota não atribuida`);
        break;   
}