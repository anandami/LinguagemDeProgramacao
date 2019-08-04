function calcula() {
    var saldo = Number(document.getElementById("saldo").value);
    
    //processamento
         
    if (saldo > 400) {
        credito = (saldo*0.3);
         
        }
         
    else if ((saldo <= 400) && (saldo>300)) {
        credito = (saldo*0.25);
                }
            
    else if ((saldo<=300) && (saldo>200)) {
        credito = (saldo*0.2);
             }
    else {
        credito = (saldo*0.1)

                }
    
document.getElementById("credito").innerHTML = credito;
}