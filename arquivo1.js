window.onload = function () {


    const senha = "1712";

    const tentativa = prompt("Área restrita! Digite o PIN para acessar: ");

    if (tentativa !== senha) {
        alert("SENHA INCORRETA! ACESSO NEGADO.")
        window.location.href = "index.html";
    }
    if (tentativa == senha) {
        alert("ACESSO LIBERADO")
        window.location.href = "arquivo1.html"
    }
}