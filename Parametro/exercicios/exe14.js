function principal(){

	var vetX = [], vetA = [], vetB = [];


	entrada(vetX);
	console.log(vetX);
	saida(vetX);
	separa(vetX, vetA, vetB);
	alert("Números pares: " + vetA);
	alert("Números ímpares: " + vetB);

}

function entrada (pvetX){
	for (var i=0; i<10; i++){
		pvetX.push(prompt("Digite um valor qualquer"));
	}
}

function saida(pvetX){
	alert(pvetX)
}

function separa(pvetX, pvetA, pvetB){
	for (var i = 0; i < 10; i++){
		if (pvetX[i]%2==0){
			pvetA.push(pvetX[i]);
		}
		else{
			pvetB.push(pvetX[i]);
		}

	}

}