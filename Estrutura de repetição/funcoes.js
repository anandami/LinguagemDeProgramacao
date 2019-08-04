//Função utilizada no primeiro exercício de estrutura de repetição utilizando variáveis
function exercicio1A(){
    //declaração de variáveis
    var A, B, C, D;
    var aux, i;
    var cont = 1;

    while (cont<=5) {
        //Entradas
        A = prompt("Informe o número");
        B = prompt("Informe o número");
        C = prompt("Informe o número");
        D = prompt("Informe o número");
        alert("Números escolhidos" + A + "," + B + ","+ C + ","+ D);
        //Processamento
        for (i=1; i<=3; i++){
            if (A>B) {
                aux = A;
                A = B;
                B = aux;
            }
            if (B>C) {
                aux = B;
                B = C;
                C = aux;
            }
            if (C>D) {
                aux = C;
                C=D;
                D=aux;

            }
        }
        alert("Números em ordem crescente " + A + "," + B + "," + C +","+ D);
        alert("Números em ordem decrescente " + D + "," + C + "," + B +","+ A);
        cont++;
    }
}

//Função utilizada no primeiro exercício de estrutura de repetição utilizando vetor
function exercicio1B(){
    //declaração de variáveis
    var vet;
    var aux, i;
    var cont = 1;

    while (cont<=5) {
        //Entradas
        vet.push(prompt("Informe o número"));
        vet.push(prompt("Informe o número"));
        vet.push(prompt("Informe o número"));
        vet.push(prompt("Informe o número"));
        alert("Números escolhidos" + vet);
        //Processamento
        for (i=0; i<3; i++){
            if (vet[i]>vet[i+1]) {
                aux = vet[i];
                vet[i] = vet[i+1];
                vet[i+1] = aux;
            }
            
        }
        alert("Números em ordem crescente " + vet);
        alert("Números em ordem decrescente " + vet.reverse());
        cont++;
        vet.pop(), vet.pop(), vet.pop(), vet.pop();
    }
}
    

//Função utilizada no segundo exercício de estrutura de repetição
var valor, vendas, lucro, despesas;
var vendas = 120;
var valor = 5;
var despesas = 200;

function exercicio2(){
    var saida = ""; 
    do {
        saida = saida + "\n";
        lucro = Number((vendas*valor)) - Number(despesas);
        saida = saida + " Ingressos a " + valor + " reais.";
        saida = saida + " Venda equivalente a " + vendas + ".";
        saida = saida + " Lucro previsto de " + lucro + " reais.";
        vendas += 26;
        valor = valor - 0.5;
    }
    while (valor >= 1)    
    alert(saida)
}
//Função utilizada no terceiro exercício de estrutura de repetição
function exercicio3() {
    //declaração de variáveis
    var idade;
    var i;
    var c1 = 0; c2 = 0; c3 = 0; c4 = 0; c5 = 0;

    //processamento

    for(i=1; i<=8; i++) {
        idade = Number(prompt("Informe a idade"));
            if (idade <= 15){
                c1++;
            }
            
            else if ((idade >= 16) && (idade <= 30)){
                c2++;
            }
            
            else if ((idade >= 31) && (idade <= 45)){
                c3++;
            }

            else if ((idade >= 46) && (idade <= 60)){
                c4++;
            }
            else {
                c5++;
            }
    
    } 
    var percentc1, percentc5;
    percentc1 = (c1*100/8)
    percentc5 = (c5*100/8)

    //saída
    alert("Ao todo, " + percentc1 + "% das idades informadas correspondem à primeira opção");
    alert("Ao todo, " + percentc5 + "% das idades informadas correspondem à última opção");    
}

function exercicio7() {
    var idade, altura, peso, contmedia, contaltura, media, percent;
    var peso = 0;
    var pessoas = 1;
    var cont50 = 0;
    var contmedia = 0;
    var contaltura = 0;
    var contpeso = 0;

    while (pessoas<=5){
            idade = Number(prompt("Digite a idade: "));
            altura = Number(prompt("Digite a altura: "));
            peso = Number(prompt("Digite o peso: "));
                if (idade>50) {
                    cont50 += 1;
                }   
                if ((idade>=10) && (idade<=20)) {
                    contmedia += 1;
                    contaltura = contaltura + altura;
                    media = contaltura/contmedia;
                }
                if (peso<40) {
                    contpeso += 1;
                    percent = (100*contpeso)/5
                }
        pessoas++
    }

    alert("Há " + cont50 + " pessoas com mais de 50 anos.")
    alert("Dentre as " + contmedia + " pessoas com 10 à 20 anos, a média de altura será " + contaltura + "/" + contmedia + "=" + media + ".")
    alert("O percentual de pessoas com menos de 40 quilos é " + percent + "%")

}

function exercicio8A(){
    //Declaração de Variáveis
    var idade, altura, peso, corO, corC;
    var cont5060 = 0;
    var pessoas = 1;
    var contaltura = 0;
    var contidade = 0;
    var contAR = 0;
    var contcor = 0;
    var percent=0;
    
    while (pessoas<=6){
            //Entrada
            idade = Number(prompt("Digite a idade: "));
            altura = Number(prompt("Digite a altura: "));
            peso = Number(prompt("Digite o peso: "));
            corO = prompt("Digite a cor dos olhos (A - Azul; P - Preto; C - Castanho, V - Verde): ");
            corC = prompt("Digite a cor dos cabelos (L - Louro; P - preto; C - Castanho, R - Ruivo): ");
            //Processamento
                if ((idade>50) && (peso<60)) {
                    cont5060 += 1;
                }   
                if (altura<1.5) {
                    contaltura += 1;
                    contidade = contidade + idade;
                    
                }
                if (corO=="A") {
                    contcor += 1;
                    
                }
                if((corO!=="A") && (corC=="R")){
                    contAR += 1;
                }
    pessoas++
    }
    var media = 0
    media = contidade/contaltura;
    percent = (100*contcor)/6;

    alert("Há " + cont5060 + " pessoas com mais de 50 anos e com peso inferior a 60 quilos.");
    alert("Dentre as " + contaltura + " pessoas com altura inferior a 1.5m, a média de idade " + contidade + "/" + contaltura + "=" + media.toFixed(2)+ ".");
    alert("O percentual de pessoas com olhos azuis é " + percent + "%");
    alert("A quantidade de pessoas com cabelos ruivos e olhos que não são azuis é " + contAR);

}

function exercicio8B(){
    //Declaração de Variáveis
    var idades = [], alturas = [], pesos = [], corOs = [], corCs = [];
    var i=0;
    var cont5060 = 0;
    var contaltura = 0;
    var contidade = 0;
    var contAR = 0;
    var contcor = 0;
    var percent;
    
    for (i=0;i<6;i++){
            //Entrada de dados
            idades.push(Number(prompt("Digite a idade: ")));
            alturas.push(Number(prompt("Digite a altura: ")));
            pesos.push(Number(prompt("Digite o peso: ")));
            corOs.push(prompt("Digite a cor dos olhos (A - Azul; P - Preto; C - Castanho, V - Verde): "));
            corCs.push(prompt("Digite a cor dos cabelos (L - Louro; P - preto; C - Castanho, R - Ruivo): "));
            //Processamento
                if ((idades[i]>50) && (pesos[i]<60)) {
                    cont5060 += 1;
                }   
                if (alturas[i]<1.5) {
                    contaltura += 1;
                    contidade = contidade + idades[i];
                    
                }
                if (corOs[i]=="A") {
                    contcor += 1;
                    
                }
                if((corOs!=="A") && (corCs=="R")){
                    contAR += 1;
                }
    
    }
    var media = 0
    media = contidade/contaltura;
    percent = (100*contcor)/6;

    alert("Há " + cont5060 + " pessoas com mais de 50 anos e com peso inferior a 60 quilos.");
    alert("Dentre as " + contaltura + " pessoas com altura inferior a 1.5m, a média de idade " + contidade + "/" + contaltura + "=" + media.toFixed(2)+ ".");
    alert("O percentual de pessoas com olhos azuis é " + percent + "%");
    alert("A quantidade de pessoas com cabelos ruivos e olhos que não são azuis é " + contAR);

}