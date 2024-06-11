let botaoValidar = document.querySelector("#botaoValidar");

botaoValidar.addEventListener("click", () => {
    let regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email = document.querySelector("#emailInput").value;

    if (regExEmail.test(email)) {
        document.querySelector("#resultado").innerText = "E-mail válido!";
        document.querySelector("#resultado").style.color = "green";
    } else {
        document.querySelector("#resultado").innerText = "E-mail inválido!";
        document.querySelector("#resultado").style.color = "red";
    }

    let regExSenha = /.+/; // Qualquer caractere, pelo menos um
    let senha = document.querySelector("#senha").value;

    if (regExSenha.test(senha)) {
        document.querySelector("#resultado").innerText = "Senha Válida!";
        document.querySelector("#resultado").style.color = "green";
    } else {
        document.querySelector("#resultado").innerText = "Senha inválida!";
        document.querySelector("#resultado").style.color = "red";
    }

    let regExNumero = /^\d+$/; // Apenas dígitos
    let numero = document.querySelector("#numero").value;

    if (regExNumero.test(numero)) {
        document.querySelector("#resultado").innerText = "Número válido!";
        document.querySelector("#resultado").style.color = "green";
    } else {
        document.querySelector("#resultado").innerText = "Número inválido!";
        document.querySelector("#resultado").style.color = "red";
    }
});
