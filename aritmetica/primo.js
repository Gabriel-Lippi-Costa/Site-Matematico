function calcularprimo() {
    
    const numero = parseInt(document.getElementById("iprimo-num").value);
    const resultado = document.getElementById("res-primo");

    
    if (isNaN(numero) || numero < 1) {
        resultado.innerHTML = "Por favor, insira um número inteiro positivo maior que 0.";
        return;
    }

    
    let ehPrimo = true;
    if (numero === 1) {
        ehPrimo = false; 
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                ehPrimo = false;
                break;
            }
        }
    }

    
    if (ehPrimo) {
        resultado.innerHTML = `O número ${numero} é <strong>primo</strong>.`;
    } else {
        resultado.innerHTML = `O número ${numero} <strong>não é primo</strong>.`;
    }
}