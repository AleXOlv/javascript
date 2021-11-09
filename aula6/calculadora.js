/**
 * Desenvolvimento das funções - Calculadora - Nível I
 * @author Hugo Almeida
 * @since 28/10/2021
 * @param {*} args
 * @returns resultado da soma de dois número.
 */
const adicionar = (...args) => {
    let somado = 0;

    for (proximoNumero of args) {
        somado += proximoNumero;
    }
    return somado;
}

/**
 * Desenvolvimento das funções - Calculadora - Nível I
 * @author Hugo Almeida
 * @since 28/10/2021
 * @param {*} numeroA 
 * @param {*} numeroB 
 * @returns resultado da subtração de dois número.
 */
const subtracao = (numeroA,numeroB) => numeroA - numeroB;

/**
 * Desenvolvimento das funções - Calculadora - Nível I
 * @author Hugo Almeida
 * @since 28/10/2021
 * @param {*} numeroA 
 * @param {*} numeroB 
 * @returns resultado da multiplicação de dois números.
 */
const multiplicacao = (numeroA,numeroB) => numeroA * numeroB;

/**
 * Desenvolvimento das funções - Calculadora - Nível I
 * @author Hugo Almeida
 * @since 28/10/2021
 * @param {*} numeroA 
 * @param {*} numeroB 
 * @returns resultado da divisão entre dois números.
 */
const divisao = (numeroA,numeroB) => parseFloat((numeroA / numeroB).toFixed(2));

/**
 * Teste das funções de calculadora.js - Nível II
 * @author Hugo Almeida
 * @since 28/10/2021
 */

console.log("-------------- Teste de Operações / Calculadora --------------");

console.log(adicionar(2,4));

console.log(subtracao(8,5));

console.log(multiplicacao(3,5));

console.log(divisao(10,3));

console.log(divisao(0,0));

console.log(divisao(0,7));

console.log(divisao(5,0));

/* Resultados exibidos no console - INÍCIO */
6
3
15
3.33
NaN
0
Infinity
/* Resultados exibidos no console - FIM */

/**
 * Desenvolvimento das funções extras - Calculadora - Nível III
 * @author Hugo Almeida
 * @since 28/10/2021
 * @param {*} numero 
 * @returns retorna o número passado como argumento, ao quadrado.
 */
const quadradoDoNumero = (numero) => {
    return multiplicacao(numero,numero);
}

/**
 * Desenvolvimento de funções extras - Calculadora - Nível III
 * @author Hugo Almeida
 * @since 28/10/2021
 * @param {*} numero 
 * @returns retorna o número passado como argumento, ao quadrado.
 */
const mediaDeTresNumeros = (numeroA,numeroB,numeroC) => {
    return divisao(adicionar(numeroA,numeroB,numeroC),3);
}

/**
 * Desenvolvimento de funções extras - Calculadora - Nível III
 * @author Hugo Almeida
 * @since 28/10/2021
 * @param {*} numeroTotal 
 * @param {*} porcentagem 
 * @returns retorna a porcentagem de um número passado como argumento.
 */
const calculaPorcentagem = (numeroTotal,percentual) => {
    return multiplicacao(numeroTotal,divisao(percentual,100));
}

/**
 * Desenvolvimento de funções extras - Calculadora - Nível III
 * @author Hugo Almeida
 * @since 28/10/2021
 * @param {*} numero 
 * @param {*} numeroTotal 
 * @returns gera a porcentagem equivalente de um número em relação a outro.
 */
const geradorDePorcentagem = (numero,numeroTotal) => {
    return multiplicacao(divisao(numero,numeroTotal),100);
}
