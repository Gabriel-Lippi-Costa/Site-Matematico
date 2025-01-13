function calcularcm() {
    var cm = Number(window.document.getElementById('icm').value)
    var res = window.document.getElementById('res-cm')
    var km = cm / 100000
    var m = cm / 100
    var mm = cm * 10
    res.innerHTML = `Resultado em km: ${km}, em m: ${m}, em mm: ${mm}`
}