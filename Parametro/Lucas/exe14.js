function captura(){
	var vetor = [], resultado=[];

	for(let i=0; i<10; i++){
		vetor[i] = Number(prompt("["+i+"]Digite um numero inteiro: "));
	}

	console.log('Seu vetor original é : '+vetor);
	console.log('Os pares do vetor acima são : '+separa_calcula(vetor)[0]);
	console.log('Os ímpares do vetor acima são : '+separa_calcula(vetor)[1]);
}



function separa_calcula(...vetor){
	var impar =[], par =[], caixa =[];

	for(let i=0; i<vetor[0].length; i++){

		//Verifica se é par e monta o primeiro vetor//
		if(vetor[0][i]%2==0){

			par.push(vetor[0][i]);

		}	

		//Verifica se é impar e monta o segundo vetor//
		if(vetor[0][i]%2!=0){
			impar.push(vetor[0][i]);
		}	
	}


	caixa.push(par);
	caixa.push(impar);

	return caixa;

}