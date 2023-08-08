userName = localStorage.getItem("user_name");

numero = Math.floor(Math.random() * 10 + 1);
resposta = document.getElementById("numbe").value;
console.log(numero);

if (resposta == numero) {
    tentativas = 1;
    alert("PARABÉNS!!! "+userName+", você acertou em " + tentativas +"tentativa(s).");
}

if (resposta > numero) {
    tentativas++
    alert("opa, resposta errada!!! Tente um número menor.");
}
else {
    tentativas++
    alert("opa, resposta errada!!! Tente um número maior");
}

function jogarDeNovo() {
    numero = Math.floor(Math.random() * 10 + 1);
}

