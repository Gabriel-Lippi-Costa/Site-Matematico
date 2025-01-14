function calcularraizq() {
    var raiz = Number(window.document.getElementById('iraizq').value)
    var res = window.document.getElementById('res-raizq')
    var resultado = Math.sqrt(raiz)
    if (raiz < 0 ) {
        res.innerHTML = `Número negativo não tem raiz quadrada real.`
    }else {
        res.innerHTML = `Resultado: ${resultado}`
    }
}