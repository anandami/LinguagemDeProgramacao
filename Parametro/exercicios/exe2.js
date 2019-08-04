function principal(){
	var horas = Number(prompt("Digite as horas"));
	var minutos = Number(prompt("Digite os minutos"))
	var seg = Number(prompt("Digite os segundos"))
	var saida = calcular(horas, minutos, seg);
	alert("Serão ao todo " + saida + " segundos.");
	document.getElementById("saida").innerHTML = "Serão ao todo " + saida + " segundos.";
}

function calcular(phoras, pminutos, pseg){
	total = ((phoras * 3600) + (pminutos * 60) + pseg)
	return total;
}
