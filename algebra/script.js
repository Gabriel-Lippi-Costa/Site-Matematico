function calcular() {
    var A1 = window.document.getElementById('iA1').value
    var A2 = window.document.getElementById('iA2').value
    var A3 = window.document.getElementById('iA3').value
    var B1 = window.document.getElementById('iB1').value
    var B2 = window.document.getElementById('iB2').value
    var B3 = window.document.getElementById('iB3').value
    var res = window.document.getElementById('res')
    var multiplicador = B2 / A2
    A1 = A1 * multiplicador
    A2 = A2 * multiplicador
    A3 = A3 * multiplicador
    B1 = B1 - A1
    B2 = B2 - A2
    B3 = B3 - A3
    var X = B3 / B1
    var Y = (A3 - A1 * X) / A2
    res.innerHTML = `Resposta: ${X}, ${Y}`
}

function matriz() {
    var A1 = window.document.getElementById('iA1').value
    var A2 = window.document.getElementById('iA2').value
    var A3 = window.document.getElementById('iA3').value
    var B1 = window.document.getElementById('iB1').value
    var B2 = window.document.getElementById('iB2').value
    var B3 = window.document.getElementById('iB3').value
    var C1 = window.document.getElementById('iC1').value
    var C2 = window.document.getElementById('iC2').value
    var C3 = window.document.getElementById('iC3').value
    var resm = window.document.getElementById('resm')
    var ParteUm = A1 * B2 * C3
    var ParteDois = B2 * C3 * C1
    var ParteTres = A3 * B1 * C2
    var EsquerdaParaDireita = ParteUm + ParteDois + ParteTres
    var ParteQuatro = C1 * B2 * A3
    var ParteCinco = C2 * B3 * A1
    var ParteSeis = C3 * B1 * A2
    var DireitaParaEsquerda = ParteQuatro + ParteCinco + ParteSeis
    var soma = EsquerdaParaDireita - DireitaParaEsquerda
    resm.innerHTML = `Resultado: ${soma}` 
}