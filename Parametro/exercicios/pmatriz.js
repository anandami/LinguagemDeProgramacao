function matriz(){
	//declaração de variaveis
	var i,j;
	var mat = [];

	//criação da matriz 
	for (i=0;i<2;i++){
		mat[i] = [];
	}
	//leitura de dados
	for (i=0;i<2;i++){
		for (j=0;j<3;j++){
			mat[i][j] = prompt("Digite um número inteiro qualquer");
		}
	}
	
	multiplica(mat);
	saida(mat);

}

function multiplica(pmat){
	//Multiplicação da matriz
	for (i=0;i<2;i++){
		var aux = pmat[i][0];
		for (j=0;j<3;j++){
			pmat[i][j] = (pmat[i][j] * aux);
		}
	}
	
}

function saida(pmat) {
	console.log(pmat);
}
