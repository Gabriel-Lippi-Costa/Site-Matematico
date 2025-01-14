function calcularmediadedois() {
    var medum = Number(window.document.getElementById('imed-um').value)
    var meddois = Number(window.document.getElementById('imed-dois').value)
    var res = window.document.getElementById('resp-med-dois')
    var resultado = (medum + meddois) / 2
    res.innerHTML = `Resultado: ${resultado}`
}