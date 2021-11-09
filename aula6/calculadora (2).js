const adicionar = (a, b) => {
    return a + b;
};

const subtracao = (a, b) => {
    return a - b;
};

const multiplicacao = (a, b) => {
    return a * b;
};

const divisao = (a, b) => {
    return a / b;
};

const quadradoDoNumero = (a) => {
    return multiplicacao(a, a);
};

const mediaDeTresNumeros = (a, b, c) => {
    let soma = a + b + c;
    return divisao(soma, 3);
};

const calculaPorcentagem = (a, b) => {
    let percentual = divisao(b, 100);
    return multiplicacao(a, percentual);
}

const geradorDePorcentagem = (a, b) => {
    let porcentagem = divisao(a, b);
    return multiplicacao(porcentagem, 100);
}

console.log ("-------------- Teste de Operações / Calculadora --------------")
console.log(`1 + 2 é: ${adicionar(1,2)}`);
console.log(`1 - 2 é: ${subtracao(1,2)}`);
console.log(`1 * 2 é: ${multiplicacao(1,2)}`);
console.log(`1 / 2 é: ${divisao(1,2)}`);
console.log(`Divisão por zero: ${divisao(0,5)}`);
console.log(`3 ao quadrado é: ${quadradoDoNumero(3)}`);
console.log(`A média entre 1, 3 e 4 é: ${mediaDeTresNumeros(1, 3, 4)}`);
console.log(`15 é ${calculaPorcentagem(300, 15)}% de 300`);
console.log(`2 é ${geradorDePorcentagem(2,200)}% de 200`);