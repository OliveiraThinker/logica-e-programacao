// exercício1: Somando 2 valores e apresentando o resultado
function somarDoisNumeros(valor1, valor2){
    const resultado= valor1+valor2;
    return resultado;
}

function calcularMediaDeDoisNumeros (valor1, valor2){
// soma todos os valores
const resultadoSomaDeDoisValores= somarDoisNumeros(valor1, valor2);
//Divide pela quantidade de numeros passados
const resultadoDaMediaDeDoisValores= resultadoSomaDeDoisValores / 2;
//retornar resultado
return resultadoDaMedidaDeDoisValores;
}

// exportar o exercício
Module.exports = {
     somarDoisNumeros
}