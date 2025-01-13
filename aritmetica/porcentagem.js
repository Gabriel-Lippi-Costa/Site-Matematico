function porcentagem() {
    var Porcentagem = Number(window.document.getElementById('iporcentagem').value)
    var Valor = Number(window.document.getElementById('ivalor').value)
    var Resposta = (Valor * Porcentagem) / 100
    var resp = window.document.getElementById('resposta-porcentagem')
    resp.innerHTML = `Resultado: ${Resposta}` 
}