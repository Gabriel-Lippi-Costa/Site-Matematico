function calculardiagonais() {
    var n = Number(window.document.getElementById('id-poligono').value)
    var res = window.document.getElementById('res-diagonais')
    var Resultado = ((n - 3) * n) / 2
    res.innerHTML = `Resultado: ${Resultado}`
}