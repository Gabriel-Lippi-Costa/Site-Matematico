function calcularperireta() {
    var l1 = Number(window.document.getElementById('ilado-um-reta').value)
    var l2 = Number(window.document.getElementById('ilado-dois-reta').value)
    var res = window.document.getElementById('res-peri-reta')
    var Resultado = l1 + l1 + l2 + l2
    res.innerHTML = `Resultado: ${Resultado}`
}