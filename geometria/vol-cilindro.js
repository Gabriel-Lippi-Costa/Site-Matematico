function calcularvolcilindro() {
    var r = Number(window.document.getElementById('ir-cilindro').value)
    var h = Number(window.document.getElementById('ih-cilindro').value)
    var res = window.document.getElementById('res-volume-cilindro')
    var Resultado = (r**2) * h * Math.PI
    res.innerHTML = `Resultado: ${Resultado}`
}