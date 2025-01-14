function calcularperilosa() {
    var l = Number(window.document.getElementById('ilosa-lado').value)
    var res = window.document.getElementById('res-peri-losa')
    var Resultado = l * 4
    res.innerHTML = `Resultado: ${Resultado}`
}