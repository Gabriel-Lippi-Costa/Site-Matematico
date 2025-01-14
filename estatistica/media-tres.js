function calcularmediadetres() {
    var medum = Number(window.document.getElementById('imedia-um').value)
    var meddois = Number(window.document.getElementById('imedia-dois').value)
    var medtres = Number(window.document.getElementById('imedia-tres').value)
    var res = window.document.getElementById('resp-med-tres')
    var Resultado = (medum + meddois + medtres)  / 3 
    res.innerHTML = `Resultado: ${Resultado}`
}