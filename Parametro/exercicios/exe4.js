function principal() {
	raio = Number(prompt("Digite o raio da esfera"))
	saida = exe4(raio);
	alert("O volume da esfera será " + saida);
	document.getElementById("saida").innerHTML = "Volume da esfera = " + saida;
}

function exe4(praio){
	volume = (4 * Math.PI * (Math.pow(praio,3)))/3;
	return volume;
}