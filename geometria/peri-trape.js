function calcularperitrape() {
    var l1 = Number(window.document.getElementById('itra-um').value)
    var l2 = Number(window.document.getElementById('itra-dois').value)
    var l3 = Number(window.document.getElementById('itra-tres').value)
    var l4 = Number(window.document.getElementById('itra-quatro').value)
    var res = window.document.getElementById('res-peri-trape')
    var Resultado = l1 + l2 + l3 + l4
    res.innerHTML = `Resultado: ${Resultado}`
}