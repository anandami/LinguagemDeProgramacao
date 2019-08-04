function calcula() {
    var salmin = document.getElementById("salmin").value;
    var quanthora = document.getElementById("quanthora").value;
    var quantextra = document.getElementById("quantextra").value;
    var horatrab = salmin/8;
    var horaextra = salmin/4;
    var saltot = (quanthora*horatrab) + (quantextra*horaextra)
    document.getElementById("saltot").innerHTML = saltot = "O valor a receber será de R$ " + saltot;
   
}