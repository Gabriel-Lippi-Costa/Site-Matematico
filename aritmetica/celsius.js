function calcularcelsius() {
    var cel = Number(window.document.getElementById('icelsius').value)
    var res = window.document.getElementById('res-celsius')
    var kel = cel + 273
    var fah = cel * 1.8 + 32
    res.innerHTML = `Resultado em Kelvin: ${kel}, em Fahrenheit: ${fah}`
}