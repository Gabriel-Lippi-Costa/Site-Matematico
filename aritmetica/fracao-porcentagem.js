function fracaoparaporcentagem() {
    var num = Number(window.document.getElementById('inumerador').value)
    var den = Number(window.document.getElementById('idenominador').value)
    var res = window.document.getElementById('res-fra-por')
    var resposta = (num / den) * 100
    res.innerHTML = `Resposta: ${resposta}%`
}