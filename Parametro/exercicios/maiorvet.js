function entrada() {
	//criar o vetor
	var vet = [];
	var i;
	for (i = 0; i < 10; i++){
		vet.push(Number(prompt("Digite um número inteiro qualquer")));
	}
	console.log(vet);
	maior(vet);
}

function maior(pvet){
	var maior = pvet[0];
	for (i = 0; i < 10; i++){
		if (pvet[i]>maior){
			maior = pvet[i];
		}
	}

	saida(maior);
}

function saida(pmaior){
	console.log(pmaior);
}