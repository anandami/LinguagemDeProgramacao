var vet2 = [];
function exercicio2(){
	//cria o objeto
	var objeto2 = new Object();
	objeto2.salario = Number(document.getElementById("salario").value);
	objeto2.idade = Number(document.getElementById("idade").value);
	objeto2.filho = Number(document.getElementById("filho").value);
	
	if (document.getElementById("masculino").checked == true){
		objeto2.sexo = "masculino";
	}
	else {
		objeto2.sexo = "feminino";
	}

	//insere o objeto no vetor 
	vet.push(objeto2);
	alert("Inserçao realizada com sucesso");
	
	//limpa formulario
	document.getElementById("salario").value = "";
	document.getElementById("idade").value = "";
	document.getElementById("filho").value = "";

	console.log(vet2);
}	

	function exercicio2sal(){
		var soma = 0;
		var media = 0;
		//percorre o vetor 
		var i;
		for (i=0;i<vet2.length;i++){
			soma += vet2[i].salario;
		}
		media = soma / vet2.length;
		alert ("Media Salarial: " + media);
	}

	function exercicio2filho(){
		var soma = 0;
		//percorre o vetor 
		var i;
		for (i=0;i<vet2.length;i++){
			soma += vet2[i].filho;
		}
		media = soma / vet2.length;
		alert ("Media de filhos: " + media);
  
	}

	function exercicio2maiorsal(){
		var maiorSalario = vet2[0].salario;

		//percorre o vetor
		for (i=0;i<vet2.length;i++){
			if (vet2[i].salario > maiorSalario){
				maiorSalario = vet2[i].salario;
			}
		}
		alert ("Maior salário: " + maiorSalario)
	}

	function exercicio2sal1000(){
		var qtdade = 0;
		var percentual = 0;
		for (i=0;i<vet2.length;i++){
			if ((vet2[i].salario > 1000) && (vet2[i].sexo == "feminino")){
				qtdade ++;
			}
		}
		percentual = (qtdade/vet2.length)*100;

		alert ("Percentual de mulheres que recebem mais que R$ 1000: " + percentual + "%");

	}

var vet3 = [];
function exercicio3(){
	//cria o objeto 
	var objeto3 = new Object();
	objeto3.altura = Number(document.getElementById("altura3").value);
	objeto3.idade = Number(document.getElementById("idade3").value);
	
	//questão - sexo
	if (document.getElementById("masculino3").checked == true){
		objeto3.sexo = "masculino";
	}
	else if (document.getElementById("feminino3").checked == true){
		objeto3.sexo = "feminino";
	}

	//questão - olhos
	if (document.getElementById("azul").checked == true){
		objeto3.olhos = "azul";
	}
	else if(document.getElementById("verde").checked == true){
		objeto3.olhos = "verde";
	}
	else {
		objeto3.olhos = "castanho";
	}

	//insere o objeto no vetor 
	vet3.push(objeto3);
	alert("Inserçao realizada com sucesso");
	
	//limpa formulario
	document.getElementById("altura3").value = "";
	document.getElementById("idade3").value = "";
	

	console.log(vet3);

	
}	

//media de idade de pessoas com olhos castanhos e mais de 1,6m

	function exercicio3_1(){
	var qtdade = 0;
	var media = 0;
	 	
		for (i=0; i<vet3.length; i++){
			if ((vet3[i].olhos == "castanho") && (vet3[i].altura>160)) {
				qtdade ++;
			}
		}
		media = (qtdade / vet3.length);
		alert("Pessoas com mais de 1,6 e olhos castanhos: " + qtdade);
	}

//a maior idade entre os habitantes
function exercicio3_2(){
		var velha = vet3[0].idade;
		for (i=0;i<vet3.length; i++){
				if (vet3[i].idade > velha){
					velha = vet3[i].idade;
				}
		}
	alert("Pessoa mais velha: " + velha);
}	
	
//a quantidade de indivíduos do sexo feminino com idade entre 20 e 45 anos ou que tenham olhos verdes e alura inferior a 1,7m
function exercicio3_3(){
		var qtdade = 0;
		for (i=0; i<vet3.length; i++){
			if (((vet3[i].sexo == "feminino") && (vet3[i].idade>20) && (vet3[i].idade<=45)) || ((vet3[i].olhos == "verde") && (vet3[i].altura<170))) {
				qtdade ++
			}
		}
		
	alert("A quantidade de indivíduos do sexo feminino com idade entre 20 e 45 anos ou que tenham olhos verdes e alura inferior a 1,7m " + qtdade);
}

//percentual de homens
function exercicio3_4(){
		var qtdade = 0;
		var percentual = 0;
		for (i=0; i<vet3.length; i++){
			if (vet3[i].sexo == "masculino") {
				qtdade ++
			}
		}

	percentual = (qtdade/vet3.length)*100;
	alert("O percentual de homens nessa população é de " + percentual);
}


//função para o quarto exercício
var vet4 = [];
function exercicio4_0(){
	//criar o objeto
	var objeto4 = new Object();

	//variáveis - estabelecer e preencher
	
	objeto4.idade4 = Number(document.getElementById("idade4").value);
	objeto4.renda4 = Number(document.getElementById("renda4").value);
	objeto4.filhos4 = Number(document.getElementById("filhos4").value);

	//questão - sexo

	if (document.getElementById("masculino4").checked == true){
		objeto4.sexo = "masculino";
	}
	else if (document.getElementById("feminino4").checked == true){
		objeto4.sexo = "feminino";
	}

	//insere o objeto no vetor 
	vet4.push(objeto4);
	alert("Inserçao realizada com sucesso");
	
	//mostra no console
	console.log(vet4);

	//limpa formulario
	document.getElementById("idade4").value = "";
	document.getElementById("renda4").value = "";
	document.getElementById("filhos4").value = "";
	
	
	
}

function exercicio4_1(){

	//1º Passo - Mostrar a média de salários entre os habitantes
	var qtdade = 0;
	var media = 0;
	 	for (var i=0; i<vet4.length; i++){
			qtdade += vet4[i].renda4;
		}
		
		media = (qtdade / vet4.length);
		alert("Media de salários: " + media);
	

	//2º Passo - Mostrar e a maior idade do grupo
	var velha = vet4[0].idade4;
		for (i=0;i<vet4.length; i++){
				if (vet4[i].idade4 > velha){
					velha = vet4[i].idade4;
				}
		}
	alert("Pessoa mais velha: " + velha);

	//3º Passo - Quantidade de mulheres com mais de dois filhos e renda familiar inferior a 600 reais 
	for (i=0;i<vet4.length; i++){
		var mulheres = 0;
		if ((vet4[i].sexo == "feminino") || (vet4[i].renda4 < 600) || (vet4[i].filhos4 > 2)){
			mulheres ++;
		}
	}
	alert ("Há " + mulheres + " mulheres com mais de dois filhos e renda familiar inferior a 600 reais")
}

//função para o exercício 5
var vet5 = [];
function exercicio5(){
	//cria objeto 
	var objeto5 = new Object();
	objeto5.codigo = Number(document.getElementById("codigo").value);
	objeto5.desc = (document.getElementById("desc").value);
	objeto5.valorunit = Number(document.getElementById("valorunit").value);
	objeto5.quant_estoque = Number(document.getElementById("quant_estoque").value);
	vet5.push(objeto5);
	alert("Inserçao realizada com sucesso");
	
	//limpa formulario
	document.getElementById("codigo").value = "";
	document.getElementById("desc").value = "";
	document.getElementById("valorunit").value = "";
	document.getElementById("quant_estoque").value = "";
	
	//mostra no console
	console.log(vet5);
}

//mostra o vetor
function mostra(){
var saida = "";
	for (var i=0; i<vet5.length; i++){
		saida = saida + vet5[i].codigo + "; " + vet5[i].desc + "; " + vet5[i].valorunit + "; " +  vet5[i].quant_estoque + "//";
	}
	alert("Produtos cadastrados: " + saida)
}

//Colocar o código em ordem crescente

function exercicio5_0(){
	for (var i=0; i < vet5.length-1;i++){ //quantas vezes vai percorrer o vetor 
		for (var j = i;j <vet5.length-1; j++){ //percorre
			if (vet5[j].codigo > vet5[j+1].codigo){
				//troca
				aux = vet5[j];
				vet5[j] = vet5[j+1];
				vet5[j+1] = aux;
			}
		}
	}

	alert("Produtos ordenados!")
}

function exercicio5_1(){
	var usuario = new Object();
	usuario.codigo = Number(prompt("Qual o código que deseja alterar?"));
	usuario.desc = prompt("Qual produto deseja inserir nesse novo código?");
	usuario.valorunit = Number(prompt("Qual o novo preço?"));
	usuario.quant_estoque = Number(prompt("Qual a nova quantidade?"));
	

	console.log(usuario);

	for (var i=0; i < vet5.length; i++){
		if (vet5[i].codigo == usuario.codigo){
			vet5[i] = usuario;
			alert("Alteração realizada com sucesso!")
		}	
	}
}

function exercicio5_2(){
	var letra = "";
	var palavra = "";
	letra = prompt("Digite a inicial do produto que deseja buscar (em minusculas): ")
	for (i=0;i<vet5.length; i++){
		//a função indexOf deverá retornar somente a primeira posição, que corresponde ao retorno 0
		if (vet5[i].desc.indexOf(letra,0) == 0){
			palavra = palavra + " " + vet5[i].desc + " ";
		}
				
	}
	alert ("Na letra desejada há os produtos: " + palavra);
}

function exercicio5_3(){
	for(i=0;i<vet5.length;i++){
		if (vet5[i].quant_estoque < 5){
			alert("O produto " + vet5[i].desc + " tem menos de 5 unidades!")

		}
	}
}



