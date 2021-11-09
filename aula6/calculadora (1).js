//CALCULADORA NIVEL 1
// GUSTAVO FERREIRA DE LIRA FERRAZ TURMA 9
/* Crie uma função adicionar, que deverá receber dois parâmetros e retornar a
soma deles. */

function adicionar(x, y) {
    return x + y;
}

/* Crie uma função de subtração, que deverá receber dois parâmetros e retornar
a subtração do primeiro menos o segundo. */

function subtracao(x,y) {
    return x - y;
}


/* Crie uma função de multiplicação, que deverá receber dois parâmetros e
retornar o resultado de sua multiplicação. */

function multiplicacao(x,y) {
    return x * y;
}

/* Crie uma função de divisão, que receberá dois parâmetros e retornará o
resultado da divisão do primeiro sobre o segundo. */
/*
function divisao(x,y) {
    return x / y;
}
*/
//CALCULADORA NIVEL 2
// GUSTAVO FERREIRA DE LIRA FERRAZ TURMA 9

/*
function adicionar(x, y) {
    return x + y;
}
console.log('Resultado de Teste de operação ADIÇÃO:' , adicionar(5,2));
*/
/*
function subtracao(x,y) {
    return x - y;
}
console.log('Resultado de Teste de operação SUBTRAÇÃO:' , subtracao(5,2));
*/

/*
function multiplicacao(x,y) {
    return x * y;
}
console.log('Resultado de Teste de operação MULTIPLICAÇÃO:' , multiplicacao(5,2));
*/
/*
function divisao(x,y) {
    return x / y;
}
console.log('Resultado de Teste de operação DIVISÃO:' , divisao(5,2));
*/
/* Execute a função que soma e a função que subtrai, passando quaisquer dois
números como argumentos. Mostrar resultados no console */
/*
function adicionar(x, y) {
    return x + y;
}
        function subtracao(x,y) {
            return x - y;
}
console.log(adicionar(5,2));
console.log(subtracao(5,2));
*/

/* Execute a função que multiplica, passando quaisquer dois números como
argumentos. Mostre o resultado no console. */
/*
function multiplicacao(x,y) {
    return x * y;
}
console.log('Resultado de Teste de operação MULTIPLIÇÃO:', multiplicacao(5,2));
*/
/* Execute a função que faz divisão, passando quaisquer dois números como
argumentos. Mostre o resultado no console.*/
/*
function divisao(x,y) {
    return x / y;
}
console.log('Resultado de Teste de operação DIVISÃO:' , divisao(5,2));
*/
/* Execute a função que faz divisão, passando agora o número zero como um dos
dois argumentos. Mostre o resultado no console */
/*
function divisao(x,y) {
    return x / y;
}
console.log('Resultado de Teste de operação DIVISÃO:' , divisao(0,0));
*/

//CALCULADORA NIVEL 3
// GUSTAVO FERREIRA DE LIRA FERRAZ TURMA 9

/* Crie uma função chamada quadradoDoNumero, que recebe um número como
parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja,
ao quadrado. Importante: quadradoDoNumero() deve usar a função multiplicação() para
calcular o quadrado do parâmetro inserido em power(). */
/*
const quadradoDoNumero = function multiplicacao(x) {
    return Math.pow (x,2);
}
console.log(quadradoDoNumero(7,2));
/*

/* Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números,
que serão inseridos por parâmetro. 
Importante: Em mediaDeTresNumeros() você precisará usar algumas funções
criadas anteriormente em nossa calculadora. */
/*
function mediaDeTresNumeros(x,y,z) {
    return (adicionar(x,y)+z)/3;
}
mediaDeTresNumeros(5,5,5);
/*

/* Crie a função calculaPorcentagem, que receberá dois parâmetros: o número
total e a porcentagem que deseja calcular, e que deverá retornar x% de
totalPorcentagem.
Exemplo: calculaPorcentagem(300, 15) (deve retornar 45, pois é 15% de 300). */

/*
function calculaPorcentagem(numtotal,porcent) {
    return (numtotal * porcent / 100);
}
console.log(calculaPorcentagem(300,15),'%');

/*

/* Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá
retornar a porcentagem do primeiro em relação ao segundo parâmetro.
Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200). */
/* 
function geradorDePorcentagem(x, y) {
    return ((y / x)/ 100);
}
console.log(geradorDePorcentagem(2,200),'%');
*/