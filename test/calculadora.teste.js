//passo 4 - chamar/importar as funções do folder/pasta/diretório "calculadora.js" para o folder "calculadora.teste.js" e imprimir os resultados no console/terminal. 
const{somarDoisNumeros, calcularMediaDeDoisNumeros} = require('../src/calculadora');//apontando para um arquivo que está fora da pasta atual, por isso o ../
//passo 5 - chamar/importar a biblioteca "chai" para o folder "calculadora.teste.js" e utilizar o método "expect/função" para comparar os resultados das funções com os valores esperados.
const {expect} = require('chai');// está importando/chamando a função expect da biblioteca chai e essa caixa/const você chama apenas uma vez (expect) e usa várias vezes

//passo 6 - descrever (vem do mocha) os testes (switches/grupo/agrupamento de testes) para a função de soma. O it é o teste em si. Um teste tem que ser burro.
describe('Testes da Função de Soma', function (){
   it('A função deve ser capaz de somar dois números positivos', function(){
    // Coleta o resultado da função e depois
    const resultadoDasoma = somarDoisNumeros(5, 7);

    //compara o resultado com o valor que voçê espera
    //o parametro que o expect está chamando é apenas um valor(resultadoDaSoma). Por ser apenas um é chamado de later loader, mas você pode chamar mais de um valor;porém, os testes a gente faz. um a um
    expect(resultadoDasoma).to.be.equal(12);
   }); 

   it('A função deve ser capaz de somar um número positivo e um negativo', function(){
    // Coleta o resultado da função e depois
    const resultadoDasoma = somarDoisNumeros(50, -7)

    //compara compara o resultado com o valor que voçê espera
    expect(resultadoDasoma).to.be.equal(43);
   });
});
// Ao rodar o teste it, ele vai executar um de cada vez
// Mocha da o describe e o it para estruturar/agrupar os testes
// Chai dá o expect para comparar os valores