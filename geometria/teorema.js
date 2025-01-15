function calcularteorema() {
    var hipo = Number(window.document.getElementById('ihipo-teo').value)
    var cat1 = Number(window.document.getElementById('icat1-teo').value)
    var cat2 = Number(window.document.getElementById('icat2-teo').value)
    var res = window.document.getElementById('res-teorema')
    var hipo = hipo**2
    var cat12 = cat1**2 + cat2**2
    res.innerHTML = `Resultado: ${hipo} = ${cat12}. Se o Resultado forem iguais então é um Triângulo Retângulo.`

}