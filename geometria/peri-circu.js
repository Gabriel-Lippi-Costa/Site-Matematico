function calcularpericirculo() {
    var r = Number(window.document.getElementById('iraio-circu').value)
    var res = window.document.getElementById('res-peri-circulo')
    var Resultado = 2 * Math.PI * r
    res.innerHTML = `Resultado: ${Resultado}`
}