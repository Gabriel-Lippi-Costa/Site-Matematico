function calcularjs() {
    var c = Number(window.document.getElementById('ic-js').value)
    var i = Number(window.document.getElementById('ii-js').value)
    var t = Number(window.document.getElementById('it-js').value)
    var res = window.document.getElementById('res-js')
    var Resultado = c * i * t
    res.innerHTML = `Resultado: ${Resultado}`
}