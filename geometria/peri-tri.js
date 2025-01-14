function calcularperitri() {
    var lum = Number(window.document.getElementById('itri-um').value)
    var ldois = Number(window.document.getElementById('itri-dois').value)
    var ltres = Number(window.document.getElementById('itri-tres').value)
    var res = window.document.getElementById('res-peri-tri')
    var Resultado = lum + ldois + ltres
    res.innerHTML = `Resultado: ${Resultado}` 
}