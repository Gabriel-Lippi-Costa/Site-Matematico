function matriz() {
    var A1 = Number(window.document.getElementById('iA1matriz').value)
    var A2 = Number(window.document.getElementById('iA2matriz').value)
    var A3 = Number(window.document.getElementById('iA3matriz').value)
    var B1 = Number(window.document.getElementById('iB1matriz').value)
    var B2 = Number(window.document.getElementById('iB2matriz').value)
    var B3 = Number(window.document.getElementById('iB3matriz').value)
    var C1 = Number(window.document.getElementById('iC1matriz').value)
    var C2 = Number(window.document.getElementById('iC2matriz').value)
    var C3 = Number(window.document.getElementById('iC3matriz').value)
    var resp = window.document.getElementById('resp-matriz')
    var EsquerdaParaDireita = (A1 * B2 * C3) + (A2 * B3 * C1) + (A3 * B1 * C2)
    var DireitaParaEsquerda = (A3 * B2 * C1) + (A2 * B1 * C3) + (A1 * B3 * C2)
    var Determinante = EsquerdaParaDireita - DireitaParaEsquerda
    resp.innerHTML = `Resultado: ${Determinante}`
}