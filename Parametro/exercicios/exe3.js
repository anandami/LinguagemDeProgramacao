function principal(){
	string1 = prompt("Digite a primeira palavra");
	string2 = prompt("Digite a segunda palavra");

	saida = exe3(string1,string2);

	if (saida == 0) {
		alert("Palavras são iguais!");

	}

	else {
		alert("São diferentes na posição " + saida);
	}
	
	document.getElementById("saida").innerHTML = "Resultado = " + saida;
}

function exe3(pstring1, pstring2){
	var i;
	
	if (pstring1 === pstring2){ //o exercicio determina que se os nomes forem iguais, deverá retornar 0.
		return 0;
	}
	else { //se forem diferentes
		for (i=0; i<pstring1.length; i++){
			if (pstring1.charAt(i) != pstring2.charAt(i)){
				return i;
			}
		}
	} 

}