function calcula (){
    var peso = document.getElementById("peso").value;
    var mais15 = document.getElementById("mais15").value;
    var menos20= document.getElementById("menos20").value;
    var mais15 = parseFloat(peso)+parseFloat(peso*0.15);
    var menos20 = parseFloat(peso-(peso*0.2));
    document.getElementById("mais15").innerHTML="Peso com variação acima de 15%: "+mais15;
    document.getElementById("menos20").innerHTML="Peso com variação abaixo de 20%: "+menos20;

}