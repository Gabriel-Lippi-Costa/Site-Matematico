function fracaoparadecimal() {
    var num = Number(window.document.getElementById('inumerador-dois').value)
    var den = Number(window.document.getElementById('idenominador-dois').value)
    var res = window.document.getElementById('res-fra-deci')
    var Resultado = num / den
    res.innerHTML = `Resultado: ${Resultado}`
}