//passo 4 - chamar/importar as funções do folder/pasta/diretório "calculadora.js" para o folder "calculadora.teste.js" e imprimir os resultados no console/terminal. 
const{somarDoisNumeros, calcularMediaDeDoisNumeros} = require('../src/calculadora');

//passo 5 - chamar/ importar a biblioteca "chai" para o folder "calculadora.teste.js" e utilizar o método "expert/função" para comparar os resultados das funções com os valores esperados
const { expect } = require('chai');// Está importando/chamando a função "expect" da biblioteca "chai" para ser utilizada nos testes.A caixa /const você chama apenas uma vez (expect) e usa várias vezes.

//passo 6 - descrever/describe ( vem do mocha) os testes (switches/grupo/agrupamento de testes) para a função de soma. O "it" é o teste em si. Um teste tem que ser burro, ou seja, você tem que dizer o que você espera que ele faça.
describe('Testes da Função somarDoisNumeros', function(){
    it('A função deve ser capaz de somar dois números positivos', function() {
      //coleta  o resultado da função e depois compara com o valor esperado
      const resultadoDaSoma = somarDoisNumeros(3, 5);
      // O parâmetro que o expect está chamando é apenas um valor(resultadoDaSOma). Por ser apenas um, este é chamado de late loader; mas, apesar de você poder chamar mais de um, os testes devem ser resalizados um a um.
      expect(resultadoDaSoma).to.be.equal(8);//aqui você está dizendo que o resultado tem que ser igual a 8.
    });

     it('A função deve ser capaz de somar um número positivo e outro negativo', function() {
      //coleta  o resultado da função e depois compara com o valor esperado
      const resultadoDaSoma = somarDoisNumeros(30, -5);
   
      // Compara o resultado com o valor que você espera 
      expect(resultadoDaSoma).to.be.equal(25);//aqui você está dizendo que o resultado tem que ser igual a 8.
    });

});
