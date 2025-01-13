function calcularm() {
    var m = Number(window.document.getElementById('im').value)
    var res = window.document.getElementById('res-m')
    var km = m / 1000
    var cm = m * 100
    var mm = m * 1000
    res.innerHTML = `Resultado em km: ${km}, em cm: ${cm}, em mm: ${mm}.`
}