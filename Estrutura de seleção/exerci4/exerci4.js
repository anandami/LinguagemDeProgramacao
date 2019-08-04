function calcula() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var num3 = Number(document.getElementById("num3").value);
    if ((num1>num2) && (num1>num3)) {
        resultado = num1
        
        
    }
    else if ((num2>num1) && (num2>num3)) {
        resultado = num2
        
        
    }
    else {
        resultado = num3;
    }
    document.getElementById("resultado").innerHTML = resultado;
}