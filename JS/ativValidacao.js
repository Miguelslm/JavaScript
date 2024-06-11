function validarFormulario() {
    let email = document.querySelector("#emailInput").value;
    let senha = document.querySelector("#senha").value;
    let celular = document.querySelector("#celular").value;

    // Expressão regular para validar email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Expressão regular para validar senha (pelo menos 6 caracteres)
    let senhaRegex = /^.{6,}$/;
    // Expressão regular para validar número de celular (formato brasileiro)
    let celularRegex = /^\d{2}\s\d{5}-\d{4}$/;

    if (!emailRegex.test(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return false;
    }

    if (!senhaRegex.test(senha)) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return false;
    }

    if (!celularRegex.test(celular)) {
        alert("Por favor, insira um número de celular válido no formato: XX XXXXX-XXXX.");
        return false;
    }

    // Se tudo estiver válido, retorna true
    return true;
}