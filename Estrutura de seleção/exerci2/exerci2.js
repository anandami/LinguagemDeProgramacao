function calcula(){
    
    var nota1=Number(document.getElementById("nota1").value);
    var nota2=Number(document.getElementById("nota2").value);
    
    
    var media = (nota1+nota2)/2;
    if (media < 3) {
        document.getElementById("saida").innerHTML = "O aluno está reprovado.";
    }
    else if ((media >= 3) && (media < 7)) {
        document.getElementById("saida").innerHTML = "O aluno está de exame.";
    }
    else  {
        document.getElementById("saida").innerHTML = "O aluno está aprovado.";
    }
        
}