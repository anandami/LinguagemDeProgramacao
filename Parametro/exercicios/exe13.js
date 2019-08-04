function principal (){
	var vet = [];
	
	entrada(vet);
	//mostra o objeto no console
	console.log(vet);
	//mostra a media salarial
	alert("Media salarial " + calculaMediaSalarial(vet));
	//mostra a menor idade
	calculaMenorIdade(vet);
	alert("A menor idade é " + calculaMenorIdade(vet));
	//mostra a maior idade
	calculaMaiorIdade(vet);
	alert("A maior idade é " + calculaMaiorIdade(vet));
	//mostra a quantidade de mulheres com 3 ou mais filhos e que recebem menos de 500 reais
	alert ("A quantidade de mulheres com 3 ou mais filhos e que recebem menos de 500 reais: " + calculaQtdadeMulheres(vet));
	
}

function entrada(pvet){
	//entrada de dados
	for (var i=0; i<3; i++){ //cadastra 3 habitantes
		var objeto = new Object(); //cria o objeto
		objeto.idade = Number(prompt("Informe a idade do " + i + " habitante."));
		objeto.sexo = prompt("Informe o sexo (F ou M) do " + i + " habitante.");
		objeto.salario = Number(prompt("Informe o salario do " + i + " habitante."));
		objeto.filhos = Number(prompt("Informe a quantidade de filhos do " + i + " habitante."));

		//adiciona objeto ao vetor
		pvet.push(objeto);
	}
}

//calcula a media de salario entre os inseridos no objeto
function calculaMediaSalarial(pvet){
var soma = 0;
	for(var i=0; i<pvet.length; i++){
		soma = soma + pvet[i].salario;
	}

	return soma / pvet.length;
}

//calcula a menor idade entre as inseridas no objeto
function calculaMenorIdade(pvet){
var menor = pvet[0].idade;
	for (var i=0; i<pvet.length; i++){
		if (pvet[i].idade < menor){ //se encontrar uma idade menor que a de posição 0, atualiza
			menor = pvet[i].idade;
		}
	}
	return menor;
}


//calcula a maior idade entre as inseridas no objeto
function calculaMaiorIdade(pvet){
var maior = pvet[0].idade;
	for (var i=0; i<pvet.length; i++){
		if (pvet[i].idade > maior){ //se encontrar uma idade maior que a de posição 0, atualiza
			maior = pvet[i].idade;
		}
	}
	return maior;
}


//calcula a quantidade de mulheres com 3 filhos que recebe até 500 reais
function calculaQtdadeMulheres(pvet){
	var contador = 0;
	for (var i=0; i<pvet.length;i++){
		if ((pvet[i].filhos >= 3) && (pvet[i].sexo == "F") && (pvet[i].salario <= 500)){
			contador++;
		}
	}	

	return contador;
}
