function calcularvolesfera() {
    var r = Number(window.document.getElementById('ir-esfera').value)
    var res = window.document.getElementById('res-volume-esfera')
    var Resultado = ((r**3) * 4 * Math.PI ) / 3
    res.innerHTML = `Resultado: ${Resultado}` 
}