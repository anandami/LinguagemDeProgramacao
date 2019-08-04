function calcula() {
    var sal = document.getElementById("sal").value;
    var conta1 = document.getElementById("conta1").value;
    var conta2 = document.getElementById("conta2").value;
    var conta1jur = conta1*1.02; 
    var conta2jur = conta2*1.02;
    var salfinal = sal - (parseFloat(conta1jur)+parseFloat(conta2jur));
    document.getElementById("conta1jur").innerHTML="O valor da primeira conta com juros é R$ " + conta1jur;
    document.getElementById("conta2jur").innerHTML="O valor da segunda conta com juros é R$" + conta2jur;
    document.getElementById("salfinal").innerHTML="O restante do salário, pós pagamento, é R$ " +salfinal;
}