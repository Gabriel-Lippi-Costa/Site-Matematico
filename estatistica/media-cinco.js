function calcularmediadecinco() {
    var medum = Number(window.document.getElementById('ium-med').value)
    var meddois = Number(window.document.getElementById('idois-med').value)
    var medtres = Number(window.document.getElementById('itres-med').value)
    var medquatro = Number(window.document.getElementById('iquatro-med').value)
    var medcinco = Number(window.document.getElementById('icinco-med').value)
    var res = window.document.getElementById('resp-med-cinco')
    var Resultado = (medum + meddois + medtres + medquatro + medcinco) / 5
    res.innerHTML = `Resultado: ${Resultado}`
}