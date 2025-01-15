function calcularMMC_MDC() {
    
    const num1 = parseInt(document.getElementById("imdcmmc-num1").value);
    const num2 = parseInt(document.getElementById("imdcmmc-num2").value);
    const resultadoDiv = document.getElementById("res-mmc-mdc");

    
    if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
        resultadoDiv.innerHTML = "Por favor, insira números inteiros positivos maiores que 0.";
        return;
    }

    
    function calcularMDC(a, b) {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    
    function calcularMMC(a, b) {
        return (a * b) / calcularMDC(a, b);
    }

    
    const mdc = calcularMDC(num1, num2);
    const mmc = calcularMMC(num1, num2);

    
    resultadoDiv.innerHTML = `
        <p><strong>MDC:</strong> ${mdc}</p>
        <p><strong>MMC:</strong> ${mmc}</p>
    `;
}