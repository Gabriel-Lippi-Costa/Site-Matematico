function calcularareat() {
    var b = Number(window.document.getElementById('ibase-t').value)
    var h = Number(window.document.getElementById('ialtura-t').value)
    var res = window.document.getElementById('res-area-t')
    var Resultado = (b * h) / 2
    res.innerHTML = `Resultado: ${Resultado}`
}