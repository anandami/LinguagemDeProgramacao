//função utilizada no primeiro exercício
function exercicio1() {
    //declaração de variáveis
    var num1 = document.getElementById('num1_1').value;
    var num2 = document.getElementById('num1_2').value;


    //processamento
    var resultado = num1-num2;


    //saídas
    document.getElementById('resultado1').innerHTML = "O resultado será " + resultado;

}

//função utilizada no segundo exercício
function exercicio2() {

    //declaração de variáveis
    var num1 = document.getElementById('num2_1').value;
    var num2 = document.getElementById('num2_2').value;
    var num3 = document.getElementById('num2_3').value;
    
    //processamento
    var resultado = num1*num2*num3;


    //saídas
    document.getElementById('resultado2').innerHTML = "O resultado será " + resultado;

}

//função utilizada no terceiro exercício
function exercicio3() {
    //declaração de variaveis
    var num1 = document.getElementById('num3_1').value;
    var num2 = document.getElementById('num3_2').value;

    //processamento
    var resultado = num1/num2;

    //saída
    document.getElementById('resultado3').innerHTML = "O resultado será " + resultado; 


}

//função utilizada no quarto exercício

function exercicio4() {
    //declaração de variáveis

    var num1 = document.getElementById('num4_1').value;
    var num2 = document.getElementById('num4_2').value;

    //processamento

    var resultado = ((num1*2)+(num2*3))/5

    //saída

    document.getElementById('resultado4').innerHTML = "A média ponderada será " + resultado;
}



