function calcularvolcone() {
    var r = Number(window.document.getElementById('ir-cone').value)
    var h = Number(window.document.getElementById('ih-cone').value)
    var res = window.document.getElementById('res-volume-cone')
    var Resultado = ((r**2) * h * Math.PI) / 3
    res.innerHTML = `Resultado: ${Resultado}`
}