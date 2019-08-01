function calcularIMC(){
    var campoPeso = parseFloat(document.getElementById("peso").value.replace(',','.'));
    var campoAltura = parseFloat(document.getElementById("altura").value.replace(',','.'));

    var imc = campoPeso/(campoAltura * campoAltura);
    
    var h3 = document.getElementById("resultado");
    h3.innerHTML = "IMC: " + imc;

    if(imc < 25){
        h3.style.color = "rgb(120,200,102)";
    }else if(imc < 35){
        h3.style.color = "rgb(255,165,0)";
    }else{
        h3.style.color = "rgb(255,40,0)";
    }

}