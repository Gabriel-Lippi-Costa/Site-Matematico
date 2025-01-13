function porcentagemparafracao() {
    var Porcentagem = Number(window.document.getElementById('ipor-um').value)
    var resp = window.document.getElementById('resp-por')
    resp.innerHTML = `Resultado: ${Porcentagem}/100`
}