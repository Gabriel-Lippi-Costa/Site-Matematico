function calcularareacircu() {
    var raio = Number(window.document.getElementById('iraio').value)
    var res = window.document.getElementById('res-area-circu')
    var Resultado = (raio**2) * Math.PI
    res.innerHTML = `Resultado: ${Resultado}`
}