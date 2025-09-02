//exercício 1 - Crie duas funções (verbo) que recebam dois números como parâmetros/variáveis (elementos) e retorne a soma e a média desses números.

//passo 1 - Criando uma função para "somarDoisNumeros"
function somarDoisNumeros(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}
//passo 2 - Criando uma função para "calcularMédiaDeDoisNúmeros" utilizando os valores do passo 1 e apresentando os seus resultados.
function calcularMediaDeDoisNumeros(valor1, valor2) {
    const resultadoDaSomaDeDoisValores = somarDoisNumeros(valor1, valor2);
    const resultadoDaMediaDeDoisValores = resultadoDaSomaDeDoisValores / 2;
    return resultadoDaMediaDeDoisValores;
}
//passo 3 - Exportando as funções criadas nos passos anteriores com o "objeto" que representa o módulo atual "modulo.exports" e suas propriedades "somarDoisNumeros, CalcularMediaDeDoisNumeros".
module.exports = {
    somarDoisNumeros,
    calcularMediaDeDoisNumeros
}
