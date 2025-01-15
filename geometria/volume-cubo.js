function calcularvolcubo() {
    var a = Number(window.document.getElementById('ivolume-cubo').value)
    var res = window.document.getElementById('res-volume-cubo')
    var Resultado = a ** 3
    res.innerHTML = `Resultado: ${Resultado}`
}