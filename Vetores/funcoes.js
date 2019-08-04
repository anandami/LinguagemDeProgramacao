//função utilizada no primeiro exercício
function exercicio1() {
    //declaração de variáveis
    var vet = [], i=0, pares = [], impares = [], quantp, quanti, a=0, b=0;

    //processamento
    for (i=0;i<5;i++){
        vet.push(Number(prompt("Digite qualquer número inteiro")));
        if (vet[i]%2==0) {
            pares[a] = vet[i];
            a++;
        }
        else {
            impares[b]= vet[i];
            b++;
        }

    }


    //saídas
    alert("Números pares: " + pares);
    alert("Quantidade de números pares: " + a);
    alert("Números ímpares: "+ impares);
    alert("Quantidade de números ímpares: " + b);

}


//função utilizada no segundo exercício//

function exercicio2(){
    //declaração de variáveis//
    var vet = [], i = 0, mult_dois = [], mult_tres = [], mult_dois_tres=[], a = 0, b = 0, c = 0;


    //processamento//
    for (i=0;i<7;i++){
        vet.push(Number(prompt("Digite um número inteiro")));
        if (vet[i]%2==0) 
        {
            mult_dois[a] = vet[i]; //calcula e recebe múltiplos de dois
            a++;
            
        }
        if (vet[i]%3==0)
        {
            mult_tres[b] = vet[i]; //calcula e recebe múltiplos de três
            b++;
            
        }
        if ((vet[i]%2==0) && (vet[i]%3==0)) //se forem múltiplos de 2 e 3
        {
            mult_dois_tres[c] = vet[i];
            c++;
            
        } 

    }

    //saídas
    alert("Números múltiplos de 2: " + mult_dois);
    alert("números múltiplos de 3: " + mult_tres);
    alert("Números múltiplos de 2 e de 3: "+ mult_dois_tres);
}

//função utilizada no quarto exercício//

function exercicio4(){
    //declaração de variáveis//
    var vet30 = [], i = 0, vet = [], cont = 0;

    //processamento 
    for (i=0;i<15;i++){
        vet.push(Number(prompt("Digite um número inteiro: ")));
        if (vet[i] === 30){
            vet30[cont] = i;
            cont++;
        }
    }
    //saída
    alert("Ao todo foram digitados " + cont + " números 30, nas posições " + vet30);
}


//Função utilizada no exercício extra, para uso de INDEXOF
function exercicio4extra(){
    //declaração de variáveis//
    var vet30 = [], i = 0, vet = [], cont = 0;

    //processamento 
    for (i=0;i<8;i++){
        vet.push(Number(prompt("Digite um número inteiro: ")));
        
    }
    	vet30 = vet.indexOf(30);

    //saída
    if (vet30 != -1) {
    	alert("Foi digitado o número 30 na(s) posição(ões): " + vet30);
    
    }
    else {
    	alert("Não há nenhum número 30 no array")
    }


}


//Aprendendo a função de deletar - indexOF e splice

function exerciciodelete(){
    //declaração de variáveis//
    vet= [], vet_remov = [], num = 0, pos = 0;

    //processamento 
    for (i=0;i<15;i++){
        vet.push(Number(prompt("Digite um número inteiro: ")));
        
    }
    var num = Number(prompt("Digite a o número que deseja remover"));
    //busca posição do elemento
    var pos = vet.indexOf(num);
        if (pos != -1) {
            vet.splice(pos,1);
            alert(vet)
        }
        else{
            alert ("Não removeu");
        }
    
          
    
}

//Função para o exercício 5

function exercicio5(){
    //declaração de variáveis
    var vet_log = [], vet_ling_prog = [], a = 0, b = 0, c = 0, vet_comum = [], i = 0; 
            
        for (a = 0; a < 15; a++) {
            vet_log.push(Number(prompt("Digite o RA dos alunos que cursam Lógica")));
      
       
        }
        console.log(vet_log);

        for (b = 0; b < 10; b++) {
            vet_ling_prog.push(Number(prompt("Digite o RA dos alunos que cursam Ling. de Programação")));
                       
        }

        console.log(vet_ling_prog);

        for (i=0; i<15; i++) {
            for (c = 0; c < 10; c++){
                if (vet_log[i] == vet_ling_prog[c]) 
                {
                	vet_comum[i] = vet_log[i];
            	}
                               
            }
        }

        console.log(vet_log);
        console.log(vet_ling_prog);
        console.log(vet_comum);

        alert("Ra's comuns:" + vet_comum)    
    }


//Função para o exercício 5 de intersecção - com IndexOf
function exercicio5intersec (){
    var logica = [];
    var programacao = [];
    var novo = [];
    var i;

    //entrada de dados
    for (i = 0; i < 15; i++) {
            logica.push(Number(prompt("Digite o RA dos alunos que cursam Lógica")));
    }
    
    
    for (i = 0; i < 10; i++) {
        programacao.push(Number(prompt("Digite o RA dos alunos que cursam Ling. de Programação")));
    }

    for (i=0; i<15; i++){
        if (programacao.indexOf(logica[i]) != -1){
            novo.push(logica[i]);
        }
    }

    alert(novo);
    console.log(logica);
    console.log(programacao);
    console.log(novo);
}

//Função para o exercício 6
function exercicio6(){
    //declaração de variáveis
    var vet_valor = [];
    var vet_percent = [];
    var vet_nome = [];
    var vet_comissao = [];
    var i = 0;
    var tot_venda = 0;
    var maior = 0, menor = 0, posMaior = 0, posMenor = 0;
    


    //Entrada dos valores e nomes
    for (i=0;i<10;i++){
        vet_valor.push(Number(prompt("Digite o valor da venda (em reais): ")));
        vet_percent.push(Number(prompt("Digite o percentual da comissão: ")));
        vet_nome.push(String(prompt("Digite o nome do vendedor: ")));
    }
    
    //Cálculo do valor de comissão
    for (i=0;i<10;i++){
    	vet_comissao.push(vet_percent[i]*vet_valor[i]/100);
    }

    //Relatório com os nomes dos vendedores e valores a receber de comissão
    for (i=0;i<10;i++) {
    	alert("O vendedor " + vet_nome[i] + " receberá R$" + vet_comissao[i]);
    }

    
    //O total das vendas de todos os vendedores
    for (i=0;i<10;i++) {
    	tot_venda += vet_valor[i];
    	
    }
    
    alert("O total das vendas de todos os vendedores é " + tot_venda);

    //O maior valor e o menor valor a receber e o nome de quem receberá
    for (i=0; i<10; i++){
    	if(vet_valor[i] < menor){
    		menor = vet_valor[i];
    		posMenor = i;
    	}
    	if (vet_valor[i] > maior) {
    		maior = vet_valor[i];
    		posMaior = i;
    	}	
    }
    	alert ("O maior valor das vendas foi de " + vet_nome[posMaior] + " que vendeu R$" + vet_valor[posMaior]);
    	alert ("O menor valor das vendas foi de " + vet_nome[posMenor] + " que vendeu R$" + vet_valor[posMenor]);
}


//função do exercício 14
function exercicio14(){
	//declaração de variáveis
	var nome = [];
	var nota1 = [];
	var nota2 = [];
	var media = [];
	var situacao = [];
	var i = 0;
	var soma = 0;
	var media_classe = 0;
	var cont_ap = 0, cont_ex = 0, cont_rep = 0, percent_ex = 0, percent_rep = 0 , percent_ap = 0;

	//entrada de dados
	for (i=0;i<6;i++){
		nome.push(prompt("Digite o nome do aluno: "));
		nota1.push(Number(prompt("Digite a primeira nota do aluno: ")));
		nota2.push(Number(prompt("Digite a segunda nota do aluno")));
	}

	//Qual foi a média de cada aluno
	for (i = 0;i<6; i++){
		media.push((nota1[i]+nota2[i])/2);
		soma = media[i] + soma;
		//Qual o percentual de alunos aprovados?
		if (media[i]>=6) {
			situacao.push("Aprovado");
			cont_ap++;
		}

		else if ((media[i] < 6) && (media[i] >=3)){
			situacao.push("Exame");
			cont_ex++;
		}
		else {
			situacao.push("Reprovado");
			cont_rep++;
		}
	}
	
	//Mostrar a média de cada aluno
	for (i = 0; i < 6; i++) {
		alert("Aluno: " + nome[i] + "; Notas: 1ª" + nota1[i] + "; 2ª " + nota2[i] + ". Média Final: " + media[i] + "; Situação " + situacao[i]);
	}
	

	//Média da classe
	media_classe = soma/6;
	alert("A média da classe será " + media_classe);
	alert("Alunos aprovados: " + cont_ap);
	alert("Alunos de exame: " + cont_ex);
	alert("Alunos reprovados: " + cont_rep);

	

	//Qual o percentual de alunos de exame?
	percent_ex = (100*cont_ex/6);
	alert("Percentual de alunos de exame: " + percent_ex + "%");


	//Qual o percentual de alunos reprovados?
	percent_rep = (100*cont_rep/6);
	alert("Percentual de alunos reprovados: " + percent_rep + "%");
	
	//Qual o percentual de aprovados?
	percent_ap = (100*cont_ap/6);
	alert("Percentual de alunos aprovados: " + percent_ap + "%");
}


function exercicio22(){
    //DECLARAÇÃO DE VARIÁVEIS
    var vet_A = [], vet_B = [];
    var i=0;

    for(i=0; i<10;i++){

        vet_A[i] = Number(prompt("Digite um numero: "));

        if(vet_A[i]<0){
            vet_B.push(vet_A.pop());
        }

        if(vet_A[i]==0){
            vet_B.push(vet_A.pop());
        }
    }
    alert("Vetor normal: " + vet_A)
    alert("Vetor com nulo e negativo: " + vet_B);
}