//modularização --> organização, reutilização, manutenção
function entrada() {
	var vet = [];
	var i;
	var idade = Number(prompt("Informe a idade"));
	var nome = String(prompt("Informe o nome"));
	for (i=0;i<10;i++){
		vet.push(Number(prompt("Informe o valor")));
		}
	//passagem de parametro
	//vet é vetor e portanto a passagem de parametro será por referencia
	//idade é inteiro e portanto a passagem de parametro é por valor	
	//nome é string e portanto a passagem de parametro é por valor	
	idade = processa(vet,idade,nome);
	saida(vet,idade,nome);
	
}

function processa(pvet,pidade,pnome) { //usar o p antes de uma variavel que é um parametro é uma boa pratica de programação
	for (i=0;i<10;i++){
		pvet[i] = pvet[i] + 10;
	}
	pidade = pidade - 10;
	pnome = pnome + "s";
	return pidade;
}


function saida(pvet,pidade,pnome) {
	
	//temos a passagem de parametro por referencia - no caso do vetor os valores serão modificáveis - se eu modifico em outra função, o vetor será modificado 
	console.log("Valor do vetor " + pvet);
	//temos a passagem de parametro por valor - no caso da idade - só passo O VALOR! Se eu for passar uma variavel simples por referencia preciso fazer da seguinte forma:
	//idade = processa (vet,idade)"
	//na função processa, coloco no final "return pidade;"
	console.log("Valor da idade -10: " + pidade);
	console.log("Nome com s: " + pnome)
}

