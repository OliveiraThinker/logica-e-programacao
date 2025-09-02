//passo 4 - chamar/importar as funções do folder/pasta/diretório "calculadora.js" para o folder "calculadora.teste.js" e imprimir os resultados no console/terminal. 
const{somarDoisNumeros, calcularMediaDeDoisNumeros} = require('../src/calculadora');
const resultadoDaSoma= somarDoisNumeros(10, 8);
const resultadoDaMedia= calcularMediaDeDoisNumeros(10, 8); 
console.log(resultadoDaSoma); // saída = 18
console.log(resultadoDaMedia); // saída = 9