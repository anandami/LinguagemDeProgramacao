//DIA 14/05 - ESTUDO DE MATRIZES
//Matriz é uma estrutura de dados bidimensional - é um vetor que tem número de colunas e de linhas
//O desafio é a declaraçao da matriz pois não há uma estrutura de dados de estilo matriz em javascript, então teremos um vetor de vetor. 
//var mat = []
//for (var i = 0; i<4; i++){
	//mat[i] = [];
//}
// 0,0  0,1  0,2
// 1,0  1,1  1,2
// 2,0  2,1  2,2
// 3,0  3,1  3,2
//   
//Acesso de posições = mat[1][1]

//EXERCICIO 1

function matriz1(){
	//declaração de variaveis
	var i,j;
	var mat = [];

	//criação da matriz 
	for (i=0;i<3;i++){
		mat[i] = [];
	}
	//leitura de dados
	for (i=0;i<3;i++){
		for (j=0;j<5;j++){
			mat[i][j] = prompt("Digite um número inteiro qualquer");
		}
	}
console.log(mat);

	//processamento e cálculo da quantidade de números entre 15 e 20
	var qtde = 0;
	for (i=0; i<3; i++){
		for (j=0;j<5;j++){
			if ((mat[i][j] >= 15) && (mat[i][j] <= 20)){
				qtde++
			}
		}
	}
	alert("A quantidade de elementos entre 15 e 20 é " + qtde);
}

//EXERCÍCIO 2
function matriz2(){
	//declaração de variáveis
	var i = 0;
	var j = 0;
	var mat = [];

	//criação da matriz 
	for (i=0;i<2;i++){
		mat[i] = [];
	}

	//leitura dos dados
	for (i=0;i<2;i++){
		for(j=0;j<4;j++){
			mat[i][j] = Number(prompt("Informe o valor da posição " + i + " - " + j));
		}
	}
	console.log(mat);

	//processamento do exercicio
	var qtde = 0;
	var soma  = 0;
	var pares = 0;
	for (i=0;i<2;i++){ //para cada linha
		for(j=0;j<4;j++){ //para cada coluna
			if((mat[i][j] >= 12) && (mat[i][j] <= 20)){
				qtde++;
			}
			if (mat[i][j] % 2 == 0){
				soma = soma + mat[i][j];
				pares++
			}
		}
	}

	media = soma/pares;

	document.getElementById("resultado1").innerHTML = "A quantidade será " + qtde;
	document.getElementById("resultado2").innerHTML = "A media será " + media;
}




//EXERCICIO 3

function matriz3(){
	//declaração de variáveis
	var i = 0;
	var j = 0;
	var mat = [];

	//criação da matriz
	for (i=0;i<6;i++){
		mat[i] = []
	}

	//leitura de dados
	for (i=0;i<6;i++){
		for (j=0;j<3;j++){
			mat[i][j] = Number(prompt("Digite um número inteiro qualquer"));	
		}
	}
	console.log(mat);

	//calculo do maior valor e menor 
	var menor = mat[0][0];
	var maior = mat[0][0];
	var linhaMenor = 0, colunaMenor = 0, linhaMaior = 0, colunaMaior = 0;
	
	for (i=0;i<6;i++){
		for (j=0;j<3;j++){
			if (mat[i][j]<menor) {
				menor = mat[i][j];
				linhaMenor = i;
				colunaMenor = j;
			}	
			if (mat[i][j]>maior) {
				maior = mat[i][j];
				linhaMaior = i;
				colunaMaior = j;
			}	
		}

	}
	alert ("Maior Elemento: " + maior + ". Posição " + linhaMaior + "-" + colunaMaior);
	alert ("Menor Elemento: " + menor + ". Posição " + linhaMenor + "-" + colunaMenor);
	document.getElementById("menor").innerHTML = "O menor valor será " + menor;
	document.getElementById("maior").innerHTML = "O maior valor será " + maior;
}


//EXERCICIO 4
function matriz4(){
	//declaração de variáveis
	var i = 0;
	var j = 0;
	var mat = [];
	var vet = [];
	var soma = [];

	//criação da matriz
	for (i=0;i<15;i++){
		mat[i] = []
	}

	//leitura de dados - notas de cada um dos alunos
	for (i=0;i<15;i++){ //cria espaço na memoria para a matriz onde caberão os alunos
		vet.push(prompt("Digite o nome do " + i + " aluno.")); //leitura de dados - nomes dos alunos
		for (j=0;j<5;j++){ //aqui caberão as notas
			mat[i][j] = Number(prompt("A nota do aluno " + i + " da prova " + j + "."));	
		}
	}

	console.log(mat);
	console.log(vet);

	//nome, média e situação (aprovado, reprovado ou em exame)
	var mediasala = 0; 
	var media = 0;
	for (i=0;i<15;i++){ //para cada aluno
		soma = 0;
		for (j=0;j<5;j++){ //para cada nota
				soma = soma + mat[i][j];
		}
		media = soma/5;
		mediasala = mediasala + media;
		if (media >= 6){
			alert ("O aluno " + vet[i] + " foi aprovado com media " + media.toFixed(2));
		}

		else if ((media >= 3) && (media <6)){
			alert ("O aluno " + vet[i] + " está em exame com media " + media.toFixed(2));
		}

		else if (media <= 3){
			alert ("O aluno " + vet[i] + " foi reprovado com media " + media.toFixed(2));
		}
	}

	//media da classe
	alert ("A media da sala será " + mediasala/5);
}

//EXERCICIO5
function matriz5(){
	//declaração de variáveis
	var i = 0;
	var j = 0;
	var mat = [];
	var vet = [];
	var soma;

	//criação da matriz
	for (i=0;i<12;i++){
		mat[i] = [] // cria na memoria espaço para a matriz
	}

	//cria o vetor 
	vet = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

	//leitura de dados
	for (i=0;i<12;i++){ //cria espaço na memoria para a matriz onde caberão as vendas de cada mês
		alert("Informe as vendas do mês de " + vet[i]);
		for (j=0;j<4;j++){ //aqui caberão as vendas da respectiva semana
			mat[i][j] = Number(prompt("Semana " + (j + 1)));	
		}
	}

	console.log(mat);
	console.log(vet);

	//O total vendido em cada mês do ano, mostrando o nome do mês por extenso
	for (i=0;i<12;i++){ //para cada mês
		soma = 0;
		for (j=0;j<4;j++){ //para cada semana
				soma = soma + mat[i][j];
		}
		alert ("No mês de " + vet[i] + " foram vendidos R$ " + soma);
	}

	//O total vendido em cada semana durante todo o ano	
	for (j=0;j<4;j++){ //para cada semana
		soma = 0;
		for (i=0;i<12;i++){ //para cada mês
				soma = soma + mat[i][j];
		}
		alert ("Na semana n." + (j+1) + " foram vendidos R$ " + soma);
	}

	//O total vendido pela loja no ano
	for (i=0;i<12;i++){ //para cada mês
		for (j=0;j<4;j++){ //para cada semana
				soma = soma + mat[i][j];
		}
	}
	alert ("Ao todo foram vendidos R$ " + soma);
};

//EXERCICIO 6
function matriz6(){
	//declaração de variáveis
	var i = 0;
	var j = 0;
	var mat = [];
	var vet = [];
	var soma = 0;

	//criação da matriz
	for (i=0;i<3;i++){
		mat[i] = [] // cria na memoria espaço para a matriz
	}

	//leitura de dados
	for (i=0;i<3;i++){ //cria espaço na memoria para a matriz onde caberão os valores na linha
		for (j=0;j<4;j++){ //valores ref a coluna
			mat[i][j] = Number(prompt("Digite um número qualquer"));	
		}
	}

	console.log(mat);
	
	//Percorre a matriz e soma as colunas, armazenando o resultado no vetor
	for (j=0;j<4;j++){ //determina a soma da coluna j
		soma = 0;
		for (i=0;i<3;i++){ //para cada item da coluna ou seja, cada linha i
				soma = soma + mat[i][j];
		}
		vet.push(soma);
	}
	alert ("Valor total da soma: " + vet);

	//Percorre a matriz, multiplicando seus valores pelo valor da soma da coluna
	var mult = 0
	for (i=0;i<3;i++){
		for(j=0;j<4;j++){
			mult = mat[i][j]*vet[j];
			alert(mat[i][j] + "X" + vet[j] + " = " + mult);
			mat[i][j] = mult;
		}
	}
	alert ("Novos valores da matriz: " + mat);
};




