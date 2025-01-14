function calcularareatra() {
    var bmaior = Number(window.document.getElementById('ibase-maior-tra').value)
    var bmenor = Number(window.document.getElementById('ibase-menor-tra').value)
    var h = Number(window.document.getElementById('ialtura-tra').value)
    var res = window.document.getElementById('res-area-tra')
    var Resultado = ((bmaior + bmenor)) * h / 2
    res.innerHTML = `Resultado: ${Resultado}`
}