function calculartabuada() {
    // Obter os números digitados pelo usuário
    const numero = parseInt(document.getElementById("iini-tab").value);
    const termino = parseInt(document.getElementById("ifim-tab").value);
    const resultadoDiv = document.getElementById("res-tabuada");

    // Validar entrada
    if (isNaN(numero) || isNaN(termino) || numero <= 0 || termino <= 0) {
        resultadoDiv.innerHTML = "Por favor, insira números inteiros positivos maiores que 0.";
        return;
    }

    // Limpar o resultado anterior
    resultadoDiv.innerHTML = "";

    // Gerar a tabuada
    for (let i = 1; i <= termino; i++) {
        const resultado = numero * i;
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`;
    }
}