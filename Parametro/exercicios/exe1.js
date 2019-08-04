function principal (){
	var entrada = Number(prompt("Informe um valor"));
	var saida = exe1(entrada);
	alert ("Resultado da soma do número da volta a cada iteração: " + saida);
	document.getElementById("saida").innerHTML = "Soma = " + saida;
}

function exe1(N){
	var i;
	var soma = 0;
	for (i=1; i<=N; i++){
		soma = soma + i;
	}
	return soma;
}
