function calcularfahrenheit() {
    var fah = Number(window.document.getElementById('ifahrenheit').value)
    var res = window.document.getElementById('res-fahrenheit')
    var kel = (fah - 32) * 5/9 + 273
    var cel = (fah - 32) / 1.8
    res.innerHTML = `Resultado em Kelvin: ${kel}, em Celsius: ${cel}`
}