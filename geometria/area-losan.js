function calculararealosan() {
    var dmaior = Number(window.document.getElementById('idiagonal-maior').value)
    var dmenor = Number(window.document.getElementById('idiagonal-menor').value)
    var res = window.document.getElementById('res-area-losan')
    var Resultado = (dmaior * dmenor) / 2
    res.innerHTML = `Resultado: ${Resultado}`
}