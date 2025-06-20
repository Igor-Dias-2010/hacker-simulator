window.onload = function () {


    const senha = "2010";

    const tentativa = prompt("Área restrita! Digite o PIN para acessar: ");

    if (tentativa !== senha) {
        alert("SENHA INCORRETA! ACESSO NEGADO.")
        window.location.href = "index.html";
    }
    if (tentativa == senha) {
        alert("ACESSO LIBERADO")
        window.location.href = "arquivos.html"
    }
}