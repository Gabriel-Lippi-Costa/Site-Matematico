function calcularkm() {
    var km = Number(window.document.getElementById('ikm').value)
    var res = window.document.getElementById('res-km')
    var m = km * 1000
    var cm = km * 100000
    var mm = km * 1000000
    res.innerHTML = `Resultado em m: ${m}, em cm: ${cm}, em mm: ${mm}.`
}