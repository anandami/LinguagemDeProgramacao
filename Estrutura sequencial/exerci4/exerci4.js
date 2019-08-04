function calcula() {
    var nota1=document.getElementById("nota1").value;
    var nota2=document.getElementById("nota2").value;
    var media = ((nota1*2) + (nota2*3))/5;
    document.getElementById("media").innerHTML="A média final do aluno é " + media;
}