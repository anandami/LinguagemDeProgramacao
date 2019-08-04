function calcula() {
    var raio = document.getElementById("raio").value;
    var comp = 2*Math.PI*raio; 
    var area = Math.pow((Math.PI*raio),2);
    var vol = (Math.pow(raio,3)*Math.PI*4)/3;
    document.getElementById("comp").innerHTML = "O comprimento da circunferência é " + comp;
    document.getElementById("area").innerHTML = "A área da circunferência é " + area;
    document.getElementById("vol").innerHTML = "O volume da esfera é " + vol;

}