function porcentagemparadecimal() {
    var Porcentagem = Number(window.document.getElementById('ipor-dois').value)
    var resp = window.document.getElementById('res-por-deci')
    var Resposta = Porcentagem / 100
    resp.innerHTML = `Resultado: ${Resposta}`
}