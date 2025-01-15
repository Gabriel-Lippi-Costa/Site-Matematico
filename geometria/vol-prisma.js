function calcularvolprisma() {
    var ab = Number(window.document.getElementById('iab-prisma').value)
    var h = Number(window.document.getElementById('ih-prisma').value)
    var res = window.document.getElementById('res-volume-prisma')
    var Resultado = ab * h
    res.innerHTML = `Resultado: ${Resultado}`
}