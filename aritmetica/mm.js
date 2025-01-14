function calcularmm() {
    var mm = Number(window.document.getElementById('imm').value)
    var res = window.document.getElementById('res-mm')
    var km = mm / 1000000
    var m = mm / 1000
    var cm = mm / 10
    res.innerHTML = `Resultado em km: ${km}, em m: ${m}, em cm: ${cm}`
}