function somarDoisNumeros(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}

function calcularMediaDeDoisNumeros(valor1, valor2) {
    const resultadoSomaDeDoisValores = somarDoisNumeros(valor1, valor2);
    const resultadoDaMediaDeDoisValores = resultadoSomaDeDoisValores / 2;
    return resultadoDaMediaDeDoisValores;
}

module.exports = {
    somarDoisNumeros,
    calcularMediaDeDoisNumeros
}
