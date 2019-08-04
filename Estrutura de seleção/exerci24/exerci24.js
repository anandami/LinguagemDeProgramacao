function calcula(){
    //entrada de dados

    var preco = Number(document.getElementById("preco").value);
    var categoria = Number(document.getElementById("categoria").value);
    var situacao = document.getElementById("situacao").value;

    //processamento
    var aumento, imposto, novo, classificacao;

    if (preco<=25){
        switch(categoria){
            case 1: aumento = preco * 0.05; break;
            case 2: aumento = preco * 0.08; break;
            case 3: aumento = preco * 0.10; break;
        }

    }

    else {
        switch(categoria){
            case 1: aumento = preco * 0.12; break;
            case 2: aumento = preco * 0.15; break;
            case 3: aumento = preco * 0.18; break;
        }
    }

    if ((categoria == 2) || (situacao == 'R')) {
        imposto = preco * 0.05;
    }

    else {
        imposto = preco * 0.08;
    }

    novo = preco + aumento - imposto;

    //saída

    document.getElementById("aumento").innerHTML = "O valor do aumento será " + aumento;
    document.getElementById("imposto").innerHTML = "O valor do imposto será " + imposto;
    document.getElementById("novo").innerHTML = "O novo valor do produto será " + novo;

}