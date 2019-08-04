function calcula() {
    var cat1 = document.getElementById("cat1").value;
    var cat2 = document.getElementById("cat2").value;
    var raiz = Math.pow(cat1, 2) + Math.pow(cat2, 2);
    var result = Math.sqrt(raiz); 
    document.getElementById("result").innerHTML = "A hipotenusa será " + result;

    }