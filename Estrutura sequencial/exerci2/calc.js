function calcula() {
    var num1=document.getElementById('num1').value;
    var num2=document.getElementById('num2').value;
    var num3=document.getElementById('num3').value;
    var mult=num1 * num2 * num3;
    document.getElementById('mult').innerHTML="O resultado será " + mult;
}
