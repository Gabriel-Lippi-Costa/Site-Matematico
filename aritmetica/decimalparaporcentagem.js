function decimalparaporcentagem() {
    var deci = Number(window.document.getElementById('idecimal').value)
    var res = window.document.getElementById('res-deci-por')
    var Resultado = deci * 100
    res.innerHTML = `Resultado: ${Resultado}%`
}