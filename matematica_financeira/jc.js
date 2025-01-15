function calcularjc() {
    var c = Number(window.document.getElementById('ic-jc').value)
    var i = Number(window.document.getElementById('ii-jc').value)
    var i = i / 100
    var t = Number(window.document.getElementById('it-jc').value)
    var res = window.document.getElementById('res-jc')
    var Resultado = ((1 + i)**t) * c
    res.innerHTML = `Resultado: ${Resultado}`
}