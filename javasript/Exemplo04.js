tarefas = [];

var indiceParaEditar = -1;

function adicionar() {
    var campoNome = document.getElementById("nome");
    var nome = campoNome.value;
    valido = validar(nome, campoNome);
    if (valido == false) {
        return;
    }

    var elementoTr = document.createElement('tr');
    var elementoTdNome = document.createElement('td');
    elementoTdNome.innerHTML = nome;
    var elementoTdAcao = document.createElement("td");

    //Criar botos na coluna ação
    var elementoBotaoEditar = document.createElement('button');
    elementoBotaoEditar.innerHTML = "Editar";
    elementoBotaoEditar.classList.add("btn", "btn-outline-primary", "mr-2");
    elementoBotaoEditar.onclick = preecherCampo;

    var elementoBotaoApagar = document.createElement('button');
    elementoBotaoApagar.innerHTML = "Apagar";
    elementoBotaoApagar.classList.add("btn", "btn-outline-danger");
    elementoBotaoApagar.onclick = apagar;



    elementoTdAcao.appendChild(elementoBotaoEditar);
    elementoTdAcao.appendChild(elementoBotaoApagar);

    elementoTr.appendChild(elementoTdNome);
    elementoTr.appendChild(elementoTdAcao);

    document.getElementById("registros").appendChild(elementoTr);

    tarefas.push(nome);
    limparCampo(campoNome);
    atualizarQuantidade();
}

function salvar(e) {
    if (e.keyCode == 13) {
        adicionarEditar();
    }
}
function adicionarEditar() {
    if (indiceParaEditar == -1) {
        adicionar();
    }
    else {
        editar();
    }
}

function editar() {
    var nome = document.getElementById('nome').value;
    tarefas[indiceParaEditar] = nome;

    var trs = document.getElementById('registros').childNodes;
    var elementoTr = trs[indiceParaEditar];
    elementoTr.childNodes[0].innerHTML = nome

    indiceParaEditar = -1;
    document.getElementById['nome'].value = '';
    document.getElementById['nome'].focus();
}
function apagar() {
    var confirmacao = confirm("Deseja apagar?");
    if (confirmacao == true) {
        var elemento = event.target;
        var elementoTd = elemento.parentNode;
        var elementoTr = elementoTd.parentNode;
        var elementoTBody = elementoTr.parentNode;

        var elementoTdNome = elementoTr.childNodes[0];
        var nome = elementoTdNome.innerHTML;

        tarefas.pop(nome)
        elementoTBody.removeChild(elementoTr);
        atualizarQuantidade();


    }
}

function preecherCampo() {
    var elementoBotaoEditar = event.target;
    var elementoTr = elementoBotaoEditar.parentNode.parentNode;
    var elementoTdNome = elementoTr.childNodes[0];
    var nome = elementoTdNome.innerHTML;
    indiceParaEditar = tarefas.indexOf(nome);
    document.getElementById('nome').value = nome;
    document.getElementById('nome').focus();

}

function atualizarQuantidade() {
    document.getElementById("quantidade").innerHTML = tarefas.length;
}

function limparCampo(campo) {
    campo.value = "";
    campo.focus();
}

function validar(nome, campo) {
    texto = "";

    if (nome.trim().length == 0) {
        texto = 'Nome deve ser preenchido';
    } else if (nome.trim().length < 3) {
        texto = 'Nome deve contar no minimo 3 caracteres';
    } else if (nome.trim().length > 20) {
        texto = 'Nome deve conter no maximo 20 caracteres';
    }

    campo.classList.remove('border-danger', 'text-danger');
    var elementos = document.getElementsByClassName('span-erro');

    for (var i = 0; i < elementos.length; i++) {
        var elemento = elementos[i];
        var elementoPai = elemento.parentNode;
        elementoPai.removeChild(elemento);
    }

    if (texto != '') {
        campo.classList.add('border-danger', 'text-danger');
        var spanErro = document.createElement('span');
        spanErro.innerHTML = texto;
        spanErro.classList.add('span-erro', 'text-danger', 'font-weight-bold');


        var elementoPaiInput = campo.parentNode;
        elementoPaiInput.appendChild(spanErro);
        campo.focus();
        return false;
    }

    return true;
}