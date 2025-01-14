function calculararear() {
    var b = Number(window.document.getElementById('ibase-r').value)
    var h = Number(window.document.getElementById('ialtura-r').value)
    var res = window.document.getElementById('res-area-r')
    var Resultado = b * h
    res.innerHTML = `Resultado: ${Resultado}`
}