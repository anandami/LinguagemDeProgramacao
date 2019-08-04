function calcula(){
    //entrada de dados
    var custo = Number(document.getElementById("custo").value);
        
    //processamento
    var percentdistrib, imposto, preco;

    if (custo<=12000) {
        percentdistrib = custo*0.05;
        imposto = 0;
    }

    else if ((custo > 12000) && (custo < 25000)) {
        percentdistrib = custo*0.1;
        imposto = custo*0.15;

    }

    else {
        percentdistrib = custo*0.15;
        imposto = custo*0.2
    }

    preco = custo + percentdistrib + imposto;
    
    //saída
    document.getElementById("imposto").innerHTML = "O valor do imposto será " + imposto;
    document.getElementById("percentdistrib").innerHTML = "O percentual do distribuidor será " + percentdistrib;
    document.getElementById("preco").innerHTML = "O preço para o consumidor será " + preco;
    
    
}