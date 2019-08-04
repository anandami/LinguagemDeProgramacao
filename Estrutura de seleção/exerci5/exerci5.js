function calcula() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var escolha = Number(document.getElementById("escolha").value);
    
    switch(escolha) {
        case 1:
            resultado = Number((num1+num2)/2)
            break;
        case 2:
            if (num1>num2){
                resultado = Number(num1-num2);
            }
            else {
                resultado = Number(num2-num1);
            }
            break;
        case 3:
            resultado = Number(num1*num2);
            break;
        case 4:
            if (num2 != 0){
            resultado = Number(num1/num2);
            }
            else
            resultado = "Divisão por zero é impossível."
            break;
        default:
            alert("Número selecionado inválido, tente novamente")
    }

    document.getElementById("resultado").innerHTML = resultado;
}