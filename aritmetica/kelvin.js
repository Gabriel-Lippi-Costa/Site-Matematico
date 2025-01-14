function calcularkelvin() {
    var kel = Number(window.document.getElementById('ikelvin').value)
    var res = window.document.getElementById('res-kelvin')
    var cel = kel - 273
    var fah = (kel - 273) * 1.8 + 32
    res.innerHTML = `Resultado em Celsius: ${cel}, em Fahrenheit: ${fah}`
}