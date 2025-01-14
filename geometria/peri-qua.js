function calcularperiqua() {
    var l = Number(window.document.getElementById('ilado-qua').value)
    var res = window.document.getElementById('res-peri-qua')
    var Resultado = l + l + l + l
    res.innerHTML = `Resultado: ${Resultado}`
}