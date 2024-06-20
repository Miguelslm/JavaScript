let botao = document.querySelector('#btn')
let imagem = document.querySelector('#img-dog')
let cachorro;



botao.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random", {method: 'GET', })
    .then((Response) => Response.json())
    .then((Response) => {
        cachorro = Response.massagem;
    })

    imagem.src = cachorro
})

// fetch("https://dog.ceo/api/breeds/image/random", {method: 'GET', })
// .then((Response) => Response.json())
// .then((Response) => {
//     if(Response.code === 404){
//         console.log("Deu errado meu bom!");
//     }else {
//         console.log("Deu certo meu bom!" + Response.message);
//     }
// })

