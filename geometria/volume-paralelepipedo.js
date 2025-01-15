function calcularvolparalelepipedo() {
    var c = Number(window.document.getElementById('ic-paralele').value)
    var l = Number(window.document.getElementById('il-paralele').value)
    var a = Number(window.document.getElementById('ia-paralele').value)
    var res = window.document.getElementById('res-volume-paralelepipedo')
    var Resultado = c * l * a
    res.innerHTML = `Resultado: ${Resultado}`
}