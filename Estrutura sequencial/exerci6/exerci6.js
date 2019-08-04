function calcula(){
    var sal=document.getElementById("sal").value;
    var venda=document.getElementById("venda").value;
    var comiss = venda*0.04;
    var tot = parseFloat(sal) + parseFloat((venda*0.04));
    document.getElementById("tot").innerHTML = "Total do salário R$" + tot;
    document.getElementById("comiss").innerHTML = "Valor da comissão R$" + comiss;
    
}

