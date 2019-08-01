alert('Olá mundo')

function concatenar(){
    var campoNome = document.getElementById("nome");
    var campoSobrenome = document.getElementById("sobrenome");

    var nome = campoNome.value;
    var sobrenome = campoSobrenome.value;

    var nomeCompleto = nome + " " + sobrenome;

    alert("Seu nome é: " + nomeCompleto);
}