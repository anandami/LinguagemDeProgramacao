function msg(n){
	switch(n){
		case 0:
			return 'a sua idade: ';
		break;
		case 1:
			return 'o seu sexo: (M ou F) :';
		break;
		case 2:
			return 'o seu salário: ';
		break;
		case 3:
			return 'o número de filhos: ';
		break;
	};
};

function captura(){
	//Vetor vazio//
	habitante = [], idade=[];

	//Monta o vetor já recebendo os dados//
	for(let i=0; i<5; i++){
		
		habitante[i] = [];
		
		for (let j=0; j<4; j++){
			/* 0 - IDADE, 1 - SEXO, 2 - SALARIO, 3 - FILHOS */
			habitante[i][j] = prompt("["+i+"]["+j+"]Digite "+msg(j));

			//Converte para number//
			if(habitante[i][j]!=false && j != 1){
				habitante[i][j] = Number(habitante[i][j]);
			}
		};
	};

	idade = maiorMenor_idade(habitante);

	document.getElementById('resu').innerHTML = 'Media Salario: '+media_salario(habitante)+' - Menor idade: '+idade[0]+' - Maior Idade:'+idade[1]+' - Qtd Mulheres...: '+mulheres_com_tres(habitante);
};



function media_salario(...vetor){
	//Variaveis
	var soma=0, qtd_sal=0;

	//Percorre o vetor para verificar a media de salarios//
	for(let i=0; i<vetor[0].length; i++){

		//Se o salario for diferente de vazio//
		if(vetor[0][i][2] != false){
			soma += vetor[0][i][2];
			qtd_sal++;							
		}
	}

	//Retorna a Media//
	return soma/qtd_sal;
}

function maiorMenor_idade(...vetor){
	//Variaveis//
	var maiorIdade=0, menorIdade=0, idades=[];

	//Verifica a meior e a menor idade//
	for(let i=0; i<vetor[0].length; i++){

		// 1° Parte da condição //
		if(i==0){
			maiorIdade = vetor[0][i][0];
			menorIdade = vetor[0][i][0];
		}

		// 2° Parte da condição //
		if(vetor[0][i][0] > maiorIdade){
			maiorIdade = vetor[0][i][0];
		}

		if(vetor[0][i][0] < menorIdade){
			menorIdade = vetor[0][i][0];
		}
		//--//

	};

	//Prepara a saida//
	idades[0] = menorIdade;
	idades[1] = maiorIdade;

	return idades;
};

function mulheres_com_tres(...vetor){
	var qtd = 0;
	//Percorre o vetor para verificar a informação//
	for (let i=0; i<vetor[0].length; i++){
		if(vetor[0][i][1]=='f' || vetor[0][i][1]=='F'){

			//Se ganha até 500,00//
			if(vetor[0][i][2]<=500 && vetor[0][i][3]==3){
				qtd++;
			}	
		}
	}
	return qtd;
}