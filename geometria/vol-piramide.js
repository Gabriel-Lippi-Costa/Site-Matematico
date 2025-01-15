function calcularvolpiramidebasetriangular() {
    var ab = Number(window.document.getElementById('iab-piramide').value)
    var h = Number(window.document.getElementById('ih-piramide').value)
    var res = window.document.getElementById('res-volume-piramide')
    var Resultado = (ab * h) / 3
    res.innerHTML = `Resultado: ${Resultado}`
}