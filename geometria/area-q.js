function calcularareaq() {
    var l = Number(window.document.getElementById('iarea-q').value)
    var res = window.document.getElementById('res-area-q')
    var Resultado = l * l
    res.innerHTML = `Resultado: ${Resultado}`
}