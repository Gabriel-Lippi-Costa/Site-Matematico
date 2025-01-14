function calcularmediadequatro() {
    var medum = Number(window.document.getElementById('ium-media').value)
    var meddois = Number(window.document.getElementById('idois-media').value)
    var medtres = Number(window.document.getElementById('itres-media').value)
    var medquatro = Number(window.document.getElementById('iquatro-media').value)
    var res = window.document.getElementById('resp-med-quatro')
    var Resultado = (medum + meddois + medtres + medquatro) / 4
    res.innerHTML = `Resultado: ${Resultado}`
}