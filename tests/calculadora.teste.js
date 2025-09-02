//passo 3 - chamar/importar as funções do folder calculadora.js para o folder calculadora.teste.js e imprimir o resultado no console/terminal. 
const{somarDoisNumeros, calcularMediaDeDoisNumeros} = require('../src/calculadora');
const resultadoDaSoma= somarDoisNumeros(5, 3);
const resultadoDaMedia= calcularMediaDeDoisNumeros(5, 3);
console.log(resultadoDaMedia);
console.log(resultadoDaSoma);