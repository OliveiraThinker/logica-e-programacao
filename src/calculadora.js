//exercício 1 - Crie uma função que receba dois números como parâmetros e retorne a soma desses números.
function somarDoisNumeros(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}
//exercício 2 - calcule a média de dois números utilizando a função do exercício 1.
function calcularMediaDeDoisNumeros(valor1, valor2) {
    const resultadoSomaDeDoisValores = somarDoisNumeros(valor1, valor2);
    const resultadoDaMediaDeDoisValores = resultadoSomaDeDoisValores / 2;
    return resultadoDaMediaDeDoisValores;
}
//exercício 3 - Exporte as funções criadas nos exercícios anteriores.
module.exports = {
    somarDoisNumeros,
    calcularMediaDeDoisNumeros
}
