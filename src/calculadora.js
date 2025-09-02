//exercício 1 - Crie uma função (verbo) que receba dois números como parâmetros (elementos) e retorne a soma desses números.
function somarDoisNumeros(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}
//passo 1 - calcule a média de dois números utilizando a função do exercício 1.
function calcularMediaDeDoisNumeros(valor1, valor2) {
    const resultadoDaSomaDeDoisValores = somarDoisNumeros(valor1, valor2);
    const resultadoDaMediaDeDoisValores = resultadoDaSomaDeDoisValores / 2;
    return resultadoDaMediaDeDoisValores;
}
//passo 2 - Exporte as funções criadas nos exercícios anteriores.
module.exports = {
    somarDoisNumeros,
    calcularMediaDeDoisNumeros
}
